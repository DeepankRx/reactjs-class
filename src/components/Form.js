function Form(props) {
  return (
    <div className="input-group input-group-sm mb-3">
      <span className="input-group-text " id="inputGroup-sizing-sm">
        Title
      </span>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        value={props.title}
        placeholder="title"
        onChange={(e) => {
          props.setTitle(e.target.value);
        }}
      />
      <br></br>
      <span className="input-group-text" id="inputGroup-sizing-sm">
        Description
      </span>
      <input
        type="text"
        value={props.description}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="description"
        onChange={(e) => {
          props.setDescription(e.target.value);
        }}
      />
      <button
        type="button"
        className="btn btn-success"
        onClick={props.isEdit ? props.handleUpdate : props.handleSubmit}
      >
        {props.isEdit ? 'Update' : 'Submit'}
      </button>
    </div>
  );
}

export default Form;
