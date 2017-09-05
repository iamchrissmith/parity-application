import React from 'react';
import mapLogo from '../resources/mapLogo.png';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import mapStyles from './MapStyles';

const googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6AcUFZ5NsOTQ4t4Cp9GSrx3I3JDKGRtY";

const AsyncGettingStartedExampleGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={5}
        defaultCenter={{ lat: 51.6684535, lng: 6.3086735 }}
        onClick={props.onMapClick}
        defaultOptions={{styles:mapStyles, disableDefaultUI:true}}
        
      >
        {cityLatLongs.map(marker => (
          <Marker
            {...marker}
            icon={mapLogo}
          />
        ))}
      </GoogleMap>
    )
  )
);

const cityLatLongs = [{
    key: 'Berlin',
    position:{lat:52.5141557,lng:13.3885606}
  },
  {
    key: 'London',
    position:{lat:51.5287718, lng:-0.2416815}
  }];

  const Map = () => {
    return (
      <section>
        <h1 className="center">Locations</h1>
        <div id="map">
          <AsyncGettingStartedExampleGoogleMap
            googleMapURL={googleMapURL}
            loadingElement={
              <div style={{ height: `100%` }}>
                Loading...
              </div>
            }
            containerElement={
              <div style={{ height: `100%` }} />
            }
            mapElement={
              <div style={{ height: `100%` }} />
            }
          />
        </div>
      </section>
    );
}

export default Map;