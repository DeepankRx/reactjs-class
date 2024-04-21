import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
const url = "http://localhost:3001";

function App() {
  // [stateName,function] = useState(initialValue)
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  // const increaseValueBy1 = (e) => {
  //   setValue(value + 1);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/add`, {
        title,
      });
      console.log(res.data.data);
      setTodos([...todos, res.data.data]);
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${url}/update/${selectedTodo._id}`, {
        title,
      });

      // .map , .filter always returns an array

      setTodos(
        todos.map((item) => {
          if (item._id === selectedTodo._id) {
            return {
              ...item,
              title,
            };
          }
          return item;
        })
      );
      setIsEdit(false);
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };
  console.log("a");
  const getAllTodos = async () => {
    try {
      const res = await axios.get(`${url}/all`);
      setTodos(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("inside useEffect");
    getAllTodos();
  }, []);
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`${url}/delete/${itemId}`);
      // setTodos(res.data.data);
      setTodos(todos.filter((item) => item._id !== itemId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (item) => {
    setTitle(item.title);
    setSelectedTodo(item);
    setIsEdit(true);
  };

  return (
    <div className="App">
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Title
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="button"
          class="btn btn-primary"
          onClick={isEdit ? handleUpdate : handleSubmit}
        >
          {isEdit ? "Update" : "Submit"}
        </button>
      </div>
      {/* <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="tel"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      /> */}
      <div className="d-flex flex-wrap gap-2">
        {todos.map((item) => (
          <div className="card w-25">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                className="btn btn-info mx-3"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
