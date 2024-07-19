const ShowForm = () => {
  return (
    <form className="mt-3">
      <div className="form-group row g-3 align-items-center justify-content-between">
        <div className="col-auto">
          <label htmlFor="calories">Search for TV Show</label>
        </div>
        <div className="col-10">
          <input
            type="text"
            name="shows"
            id="shows"
            required
            className="form-control col-8 bg-transparent rounded-3 p-2"
          />
        </div>
      </div>
    </form>
  );
};

export default ShowForm;
