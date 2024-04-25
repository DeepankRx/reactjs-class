import React from 'react';

const Card = (props) => {
  const { todo, handleDelete, handleEdit } = props;
  console.log(todo);
  return (
    <div className="card w-25">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.description}</p>
        <button
          type="text"
          className="btn btn-info mx-3"
          onClick={() => handleEdit(todo)}
        >
          Edit
        </button>
        <button
          type="text"
          className="btn btn-danger"
          onClick={() => handleDelete(todo._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
