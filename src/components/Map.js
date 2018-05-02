import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

/**
 * Map
 */
const Map = withScriptjs(withGoogleMap((props) => {
  return <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 39.6014477, lng: -82.9444841 }}
    options= {{
      draggable: false,
      disableDefaultUI: true,
      draggableCursor: 'pointer, auto'
    }}
    >
    
    {props.isMarkerShown && <Marker position={{ lat: 39.60144770000001, lng: -82.94448410000001 }} />}
  </GoogleMap>
}))

export default Map;
