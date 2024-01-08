import { createReducer } from "@reduxjs/toolkit";
import { setMapPosition, setSelectedMarker, setVisibleMarkers } from "../actions/action";
import { Furniture } from "../../interface/furniture";
import { LatLngLiteral } from "leaflet";

interface RootState {
  selectedMarker: Furniture | null;
  visibleMarkers: Furniture[];
  mapPosition: LatLngLiteral;
}

const initialState: RootState = {
  selectedMarker: null,
  visibleMarkers: [],
  mapPosition: { lat: 49.0, lng: 31.0 },
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(setSelectedMarker, (state, action) => {
    state.selectedMarker = action.payload
  })
  .addCase(setVisibleMarkers, (state, action) => {
    state.visibleMarkers = action.payload;
  })
  .addCase(setMapPosition, (state, action) => {
    state.mapPosition = action.payload;
  })
});

export type { RootState };
