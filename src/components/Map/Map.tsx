import React, { useState } from 'react';
import { MapContainer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import './style.scss';
import { Furniture } from '../../interface/furniture';
import MapComponent from '../MapConatiner/MapComponent';

type Props = {
  furnitures: Furniture[];
};

const Map: React.FC<Props> = ({ furnitures }) => {
  const [position, setPosition] = useState<LatLngTuple>([49.0, 31.0]);

  return (
    <div className="container">
      <MapContainer className="map" center={position} zoom={6} scrollWheelZoom={false}>
        <MapComponent furnitures={furnitures} position={position} setPosition={setPosition} />
      </MapContainer>
    </div>
  );
};

export default Map;
