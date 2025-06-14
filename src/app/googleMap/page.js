'use client'

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{ color: 'red', fontWeight: 'bold' }}>
    {text}
  </div>
);

export default function Home() {

  const defaultProps = {
    center: {
      lat: 24.99475803413072,
      lng: 121.5688257706984
    },
    zoom: 17
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {apiKey ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={24.99475803413072}
            lng={121.5688257706984}
            text="My Marker"
          />
        </GoogleMapReact>
      ) : (
        <p className="text-red-500">Missing Google Maps API Key</p>
      )}
    </div>
  );
}
