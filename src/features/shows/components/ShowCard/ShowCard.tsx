const ShowCard = () => {
  const imageStyle = {
    width: '100%',
    height: '350px',
    backgroundImage: `url("https://static.tvmaze.com/uploads/images/medium_portrait/37/93943.jpg")`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="card bg-transparent border-0 mt-4 text-light py-4">
      <div className="row g-0">
        <div className="col-md-3">
          <div style={imageStyle} />
        </div>
        <div className="col-md-9">
          <div className="card-body pt-2">
            <h3 className="card-title mb-4">War & Peace</h3>
            <h5 className="card-text">⭐ 7.9</h5>
            <div className="d-flex gap-3 text-white-50 mt-3">
              <p className="card-text ">2016-01-03</p>
              <p className="card-text">BBC One</p>
              <p className="card-text">Ended</p>
              <p className="card-text">60 min</p>
            </div>
            <div className="d-flex gap-4 mt-2">
              <p className="border rounded-3 p-2 ">Drama</p>
              <p className="border rounded-3 p-2 ">Romance</p>
              <p className="border rounded-3 p-2 ">History</p>
            </div>
            <div className="mt-3">
              <h4>Plot</h4>
              <p className="text-white-50 mt-3 w-75">
                A new adaptation of Leo Tolstoy's timeless novel, three young
                people experience life, love and loss against the epic backdrop
                of Russia's wars with Napoleon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
