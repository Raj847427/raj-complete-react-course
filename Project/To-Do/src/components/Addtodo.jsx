const Addtodo = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo item here" />
          </div>
          <div className="col-4">
            <input type="date" name="Date" id="Date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Addtodo;
