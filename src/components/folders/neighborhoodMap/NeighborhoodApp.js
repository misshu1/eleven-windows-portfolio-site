import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContainer, MapStyle, MapContainer } from "./style";
import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

let newMarkers = [];
const style = {
    width: "100%",
    height: "100%"
};
class NeighborhoodApp extends Component {
    state = {
        close: "",
        disabled: true,
        placeData: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    componentDidMount() {
        if (window.matchMedia("(min-width: 35rem)").matches) {
            this.handleDrag();
        }
        const clientID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET;
        const url = `https://api.foursquare.com/v2/venues/explore?ll=45.105083,24.364982&client_id=${clientID}&client_secret=${clientSecret}&v=20180819`;

        fetch(url)
            .then(data => {
                if (data.ok) {
                    return data.json();
                } else {
                    alert(
                        "Failed to get data from Foursquare" +
                            new Error(data.statusText)
                    );
                }
            })
            .then(data => {
                const newData = data.response.groups[0].items.map(item => {
                    return {
                        position: {
                            lat: item.venue.location.lat,
                            lng: item.venue.location.lng
                        },
                        title: item.venue.name,
                        venueId: item.venue.id,
                        address: item.venue.location.formattedAddress[0],
                        state: item.venue.location.state
                    };
                });
                return this.setState({ placeData: newData });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate() {
        const { placeData } = this.state;
        newMarkers = [];
        placeData.forEach(loc => {
            newMarkers = [
                ...newMarkers,
                <Marker
                    key={loc.title}
                    onClick={this.onMarkerClick}
                    name={loc.title}
                    address={loc.address}
                    position={loc.position}
                    venueId={loc.venueId}
                    state={loc.state}
                    animation={window.google.maps.Animation.DROP}
                />
            ];
        });
    }

    onMarkerClick = async (props, marker, e) => {
        await this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
        let bounds = new window.google.maps.LatLngBounds();
        await bounds.extend(marker.position);
    };

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    quitApp = () => {
        this.setState({
            close: "close"
        });
        setTimeout(() => {
            this.props.closeApp("neighborhoodOpen", "neighborhoodMinimize");
        }, 200);
    };

    handleDrag = () => {
        this.setState({
            disabled: false
        });
    };

    render() {
        const { selectedPlace } = this.state;
        const {
            windowIndex,
            activeWindow,
            minimizeApp,
            neighborhoodOpen,
            neighborhoodMinimize
        } = this.props;
        const { disabled, close } = this.state;
        return (
            <Draggable axis="both" handle=".handle" disabled={disabled}>
                <AnimateFadeInOut
                    open={neighborhoodOpen}
                    minimize={neighborhoodMinimize}
                    close={close}
                    appIndex={windowIndex[5]}
                    onClick={() => activeWindow(5)}
                >
                    <AppContainer>
                        <NameBar style={{ zIndex: 101 }}>
                            <Name className="handle">Neighborhood Map</Name>
                            <Buttons>
                                <div
                                    onClick={() =>
                                        minimizeApp(
                                            "neighborhoodMinimize",
                                            true
                                        )
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon="window-minimize"
                                        size="sm"
                                    />
                                </div>
                                <Link
                                    to={
                                        window.matchMedia(
                                            "(max-width: 56.25rem)"
                                        ).matches
                                            ? "/"
                                            : "#"
                                    }
                                    onClick={() => this.quitApp()}
                                >
                                    <FontAwesomeIcon icon="times" size="lg" />
                                </Link>
                            </Buttons>
                        </NameBar>
                        <MapContainer>
                            <Map
                                google={this.props.google}
                                zoom={15}
                                style={style}
                                styles={MapStyle}
                                initialCenter={{
                                    lat: 45.105083,
                                    lng: 24.364982
                                }}
                            >
                                {newMarkers}
                                <InfoWindow
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}
                                    onClose={this.onClose}
                                >
                                    <div>
                                        <h4>{selectedPlace.name}</h4>
                                        {selectedPlace.state !== undefined ? (
                                            <p>State: {selectedPlace.state}</p>
                                        ) : (
                                            ""
                                        )}
                                        <p>Address: {selectedPlace.address}</p>
                                    </div>
                                </InfoWindow>
                            </Map>
                        </MapContainer>
                    </AppContainer>
                </AnimateFadeInOut>
            </Draggable>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API
})(NeighborhoodApp);

NeighborhoodApp.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    neighborhoodOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    minimizeApp: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
