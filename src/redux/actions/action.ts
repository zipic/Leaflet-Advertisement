import { createAction } from "@reduxjs/toolkit";
import { Furniture } from "../../interface/furniture";

export const setSelectedMarker = createAction<Furniture | null>('SET_SELECTED_MARKER');
export const setVisibleMarkers = createAction<Furniture[]>("SET_VISIBLE_MARKERS");
export const setMapPosition = createAction<{ lat: number; lng: number }>('SET_MAP_POSITION');