import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiShows, Show } from '../../types';
import axiosApi from '../../axiosApi';
import { RootState } from '../../app/store';

export const fetchShows = createAsyncThunk<
  Show[],
  string,
  { state: RootState }
>('shows/fetch', async (showName) => {
  const { data: shows } = await axiosApi.get<ApiShows>(
    `search/shows?q=${showName}`,
  );
  return shows
    ? shows.map((s) => ({
        id: s.show.id,
        name: s.show.name,
        image: s.show.image,
        premiered: s.show.premiered,
        network: s.show.network,
        status: s.show.status,
        runtime: s.show.runtime,
        genres: s.show.genres,
        summary: s.show.summary,
        rating: s.show.rating,
      }))
    : [];
});

export const fetchOneShowInfo = createAsyncThunk<
  Show,
  string,
  { state: RootState }
>('shows/fetchOneShowInfo', async (id) => {
  const { data: show } = await axiosApi.get<Show>(`shows/${id}`);
  return { ...show, id: show.id };
});
