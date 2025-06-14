"use client";

import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Mapbox() {

  const shopList = [
    {
      longitude: 121.52987215179965,
      latitude: 25.03316626104794,
      name: "玖仰茶食文化"
    },
    {
      longitude: 121.53066285543123,
      latitude: 25.04112192795497,
      name: "特有種商行電影咖啡館"
    },
    {
      longitude: 121.51595362104845,
      latitude: 25.04445596984822,
      name: "齊文藝室共享空間咖啡廳"
    }
  ];

  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoiamllbmh1YWdvbyIsImEiOiJjbTdsNjY0MjMwNDl2MmtzZHloYXY0czNkIn0.mlD3UGH3wR3ZMJmCuHDpSQ"
      initialViewState={{
        longitude: 121.52817156559162,
        latitude: 25.043949558152605,
        zoom: 15
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
    >
      {shopList.map((shop) => (
        <Marker
          key={shop.name}
          longitude={shop.longitude}
          latitude={shop.latitude}
        >
          <div
            className="w-4 h-4 bg-red-500 rounded-full cursor-pointer"
            title={shop.name}
            onClick={() => alert(shop.name)}
          />
        </Marker>
      ))}
    </Map>
  );
}
