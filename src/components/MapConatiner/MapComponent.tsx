import React, { useEffect } from 'react';
import { TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import L from 'leaflet';
import { Furniture } from '../../interface/furniture';
import { useDispatch, useSelector } from 'react-redux';
import { setMapPosition, setSelectedMarker, setVisibleMarkers } from '../../redux/actions/action';
import './style.scss';
import { RootState } from '../../redux/reducer/markerReducer';

type MapComponentProps = {
  furnitures: Furniture[];
  position: LatLngTuple;
  setPosition: React.Dispatch<React.SetStateAction<LatLngTuple>>;
};

const customMarkerIcon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/img/icons/marker.svg`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const MapComponent: React.FC<MapComponentProps> = ({ furnitures }) => {
  const dispatch = useDispatch();
  const mapPosition = useSelector((state: RootState) => state.mapPosition);

  useMapEvents({
    moveend: (e) => {
      const newMapPosition = e.target.getCenter();
      dispatch(setMapPosition({ lat: newMapPosition.lat, lng: newMapPosition.lng }));
    },
  });

  useEffect(() => {
    console.log("Before filter:", furnitures);
    
    const newVisibleMarkers = furnitures.filter((store) => {
      const isVisible =
        store.latitude !== undefined &&
        store.longitude !== undefined &&
        store.latitude >= mapPosition.lat - 0.5 &&
        store.latitude <= mapPosition.lat + 0.5 &&
        store.longitude >= mapPosition.lng - 0.5 &&
        store.longitude <= mapPosition.lng + 0.5;
      return isVisible;
    });
  
    console.log("After filter:", newVisibleMarkers);
  
    dispatch(setVisibleMarkers(newVisibleMarkers));
    dispatch(setSelectedMarker(null));
  }, [furnitures, mapPosition, dispatch]);

  return (
    <>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
{furnitures.map((store) => (
  store.latitude !== undefined && store.longitude !== undefined && (
    <Marker
      key={store.id}
      position={{ lat: store.latitude, lng: store.longitude }}
      icon={customMarkerIcon}
      eventHandlers={{ click: () => dispatch(setSelectedMarker(store)) }}
    >
      <Popup className="popup">
        {`Ласкаво просимо до ${store.store}!`}
        <img className="popup__photo" src={store.photo} alt="" />
      </Popup>
    </Marker>
  )
))}
  </>
  );
};

export default MapComponent;
