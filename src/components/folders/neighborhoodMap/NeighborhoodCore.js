import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { MapStyle, MapContainer } from "./style";

const style = {
    width: "100%",
    height: "calc(100% - 2.5rem)"
};
let allMarkers = [];
const LoadingContainer = () => null;

class NeighborhoodCore extends Component {
    state = {
        placeData: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    async componentDidMount() {
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
            this.setState({ placeData: newData });
        } catch (err) {
            console.log(err);
        }
    }

    renderMarkers = () => {
        allMarkers = [];
        return this.state.placeData.forEach(loc => {
            allMarkers = [
                ...allMarkers,
                <Marker
                    key={loc.venueId}
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
    };

    onMarkerClick = async (props, marker, e) => {
        await this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

        let bounds = new window.google.maps.LatLngBounds();
        await bounds.extend(marker.position);

        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
            setTimeout(() => {
                marker.setAnimation(null);
            }, 350);
        }
    };

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        const { selectedPlace, activeMarker, showingInfoWindow } = this.state;
        return (
            <MapContainer>
                <Map
                    google={this.props.google}
                    onReady={this.renderMarkers()}
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
                        marker={activeMarker}
                        visible={showingInfoWindow}
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
        );
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    LoadingContainer: LoadingContainer
})(NeighborhoodCore);
