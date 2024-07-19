import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchShows } from '../../ShowsThunks';
import { Autocomplete, TextField } from '@mui/material';

const ShowForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const shows = useAppSelector((state) => state.shows.items);

  useEffect(() => {
    if (inputValue) {
      dispatch(fetchShows(inputValue));
    }
  }, [inputValue, dispatch]);

  return (
    <form className="mt-3">
      <div className="form-group row g-3 align-items-center justify-content-between">
        <div className="col-auto">
          <label htmlFor="shows">Search for TV Show</label>
        </div>
        <div className="col-10">
          <Autocomplete
            freeSolo
            options={shows}
            getOptionLabel={(option) =>
              typeof option === 'string' ? option : option.name
            }
            onChange={(_, newValue) => {
              if (newValue && typeof newValue !== 'string') {
                navigate(`/shows/${newValue.id}`);
              }
            }}
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </div>
      </div>
    </form>
  );
};

export default ShowForm;
