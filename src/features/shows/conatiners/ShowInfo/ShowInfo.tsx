import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import Spinner from '../../../../components/Spinner/Spinner';
import { fetchOneShowInfo } from '../../ShowsThunks';

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

  return (
    <div className="card bg-transparent border-0 mt-4 text-light py-4">
      <div className="row g-0">
        <div className="col-md-3 mb-3">
          <img
            src={show.image.medium}
            alt={show.name}
            style={{ width: '100%', height: '350px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body pt-2">
            <h3 className="card-title mb-4">{show.name}</h3>
            {show.rating.average && (
              <h5 className="card-text">⭐ {show.rating.average}</h5>
            )}
            <div className="d-flex gap-3 text-white-50 mt-3">
              <p className="card-text ">{show.premiered}</p>
              <p className="card-text">{show.network?.name}</p>
              <p className="card-text">{show.status}</p>
              {show.runtime && <p className="card-text">{show.runtime} min</p>}
            </div>
            <div className="d-flex gap-4 mt-2 flex-wrap">
              {show.genres.map((genre) => (
                <p key={genre} className="border rounded-3 p-2">
                  {genre}
                </p>
              ))}
            </div>
            <div className="mt-3">
              <h4>Plot</h4>
              <p
                className="text-white-50 mt-3 w-75"
                dangerouslySetInnerHTML={{ __html: show.summary }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
