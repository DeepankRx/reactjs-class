import React from 'react';

const Todo = (props) => {
  console.log(props);
  return (
    <>
      {props.list.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default Todo;
