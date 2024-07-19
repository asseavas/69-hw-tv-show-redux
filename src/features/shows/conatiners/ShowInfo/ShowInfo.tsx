import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import Spinner from '../../../../components/Spinner/Spinner';
import { fetchOneShowInfo } from '../../ShowsThunks';
import ShowCard from '../../components/ShowCard/ShowCard';

const ShowInfo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.shows.selectedShow);
  const detailsLoading = useAppSelector((state) => state.shows.detailsLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneShowInfo(id));
    }
  }, [id, dispatch]);

  if (detailsLoading || !show) {
    return <Spinner />;
  }

  return <ShowCard show={show} />;
};

export default ShowInfo;
