import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContainer, MapStyle, MapContainer } from "./style";
import { Name, NameBar, Buttons } from "../style";
import { AnimateFadeInOut } from "../../animations/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from "react-draggable";

const style = {
    width: "100%",
    height: "calc(100% - 2.5rem)"
};
let allMarkers = [];
const LoadingContainer = props => null;

class NeighborhoodApp extends Component {
    state = {
        close: "",
        disabled: true,
        placeData: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    async componentDidMount() {
        if (window.matchMedia("(min-width: 35rem)").matches) {
            this.handleDrag();
        }
        const clientID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET;
        const url = `https://api.foursquare.com/v2/venues/explore?ll=45.105083,24.364982&client_id=${clientID}&client_secret=${clientSecret}&v=20180819`;

        allMarkers = [];
        try {
            const data = await fetch(url);
            const dataJson = data.ok
                ? await data.json()
                : alert(
                      "Failed to get data from Foursquare" +
                          new Error(data.statusText)
                  );
            const newData = await dataJson.response.groups[0].items.map(
                item => {
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
                }
            );
            await this.setState({ placeData: newData });
        } catch (err) {
            console.log(err);
        }

        allMarkers = [];
        await this.state.placeData.forEach(loc => {
            allMarkers = [
                ...allMarkers,
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
        this.forceUpdate();
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
                        <NameBar>
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
                                {allMarkers}
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
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    LoadingContainer: LoadingContainer
})(NeighborhoodApp);

NeighborhoodApp.propTypes = {
    windowIndex: PropTypes.object.isRequired,
    neighborhoodOpen: PropTypes.string.isRequired,
    activeWindow: PropTypes.func.isRequired,
    minimizeApp: PropTypes.func.isRequired,
    closeApp: PropTypes.func.isRequired
};
