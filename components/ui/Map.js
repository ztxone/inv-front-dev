// <div
//   className="w-full min-h-[450px] bg-[url('/image/content/map-bg.png')] bg-no-repeat bg-cover
// lg:min-h-[818px]"
// >

// </div>
//  https://scp111.hosting.reg.ru:2083/cpsess6997991663/frontend/jupiter/filemanager/index.html

import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: { lat: 59.880902, lng: 30.402819 },
    zoom: 16,
    styles: [
      {
        stylers: [
          {
            hue: "#ff1a00",
          },
          {
            invert_lightness: true,
          },
          {
            saturation: -100,
          },
          {
            lightness: 33,
          },
          {
            gamma: 0.5,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#2D333C",
          },
        ],
      },
    ],
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDw4ypoJbMz_pDoyEVdxn0s_hxDZ3M0chE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={59.880902} lng={30.402819} text="Invert.studio" />
      </GoogleMapReact>
    </div>
  );
}
