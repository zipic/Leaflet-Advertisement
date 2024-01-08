import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Furniture } from '../../interface/furniture';
import { RootState } from '../../redux/reducer/markerReducer';
import './style.scss';
import { setSelectedMarker } from '../../redux/actions/action';

interface Props {
  furnitures: Furniture[];
}

export const Advertisement: React.FC<Props> = ({ furnitures }) => {
  const dispatch = useDispatch();
  const selectedMarker = useSelector((state: RootState) => state.selectedMarker);
  const visibleMarkers = useSelector((state: RootState) => state.visibleMarkers);

  const handleMarkerClick = (marker: Furniture) => {
    dispatch(setSelectedMarker(marker));
  };

  return (
    <div className="advertisement-container">
      <div className="advertisement">
        {selectedMarker ? (
          <div className="card">
            <img className="card__image" src={selectedMarker.photo} alt="" />
            <p className="card__name">{selectedMarker.title}</p>
            <p className="card__store">{selectedMarker.store}</p>
          </div>
        ) : (
          visibleMarkers.length && !selectedMarker ? (
            visibleMarkers.map((product) => (
              <div className="card" key={product.id} onClick={() => handleMarkerClick(product)}>
                <img className="card__image" src={product.photo} alt="" />
                <p className="card__name">{product.title}</p>
                <p className="card__store">{product.store}</p>
              </div>
            ))
          ) : (
            furnitures.map((product) => (
              <div className="card" key={product.id} onClick={() => handleMarkerClick(product)}>
                <img className="card__image" src={product.photo} alt="" />
                <p className="card__name">{product.title}</p>
                <p className="card__store">{product.store}</p>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default Advertisement;
