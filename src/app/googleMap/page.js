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

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD-i9wdqvm0zEG6ewyn9ckdPQRcnCbWGeo" }} // 在此填入你的 Google Maps API 金鑰
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={24.99475803413072}
          lng={121.5688257706984}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
