import { Show } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

export interface ShowsState {
  items: Show[];
  fetchLoading: boolean;
}

const initialState: ShowsState = {
  items: [],
  fetchLoading: false,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
});

export const showsReducer = showsSlice.reducer;
