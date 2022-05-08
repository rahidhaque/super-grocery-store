import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 23.73395580622853,
    lng: 90.40869696906893
};

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)