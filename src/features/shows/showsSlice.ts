import { Show } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOneShowInfo, fetchShows } from './ShowsThunks';

export interface ShowsState {
  items: Show[];
  selectedShow: Show | null;
  fetchLoading: boolean;
  detailsLoading: boolean;
}

const initialState: ShowsState = {
  items: [],
  selectedShow: null,
  fetchLoading: false,
  detailsLoading: false,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(
      fetchShows.fulfilled,
      (state, action: PayloadAction<Show[]>) => {
        state.items = action.payload;
        state.fetchLoading = false;
      },
    );
    builder.addCase(fetchOneShowInfo.pending, (state) => {
      state.detailsLoading = true;
    });
    builder.addCase(
      fetchOneShowInfo.fulfilled,
      (state, action: PayloadAction<Show>) => {
        state.selectedShow = action.payload;
        state.detailsLoading = false;
      },
    );
  },
});

export const showsReducer = showsSlice.reducer;
