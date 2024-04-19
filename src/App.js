import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
const url = 'http://localhost:3001';

function App() {
  // [stateName,function] = useState(initialValue)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  // const increaseValueBy1 = (e) => {
  //   setValue(value + 1);
  // };

  const handleSubmit = async () => {
    try {
      await axios.post(`${url}/add`, {
        title,
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log('a');
  const getAllTodos = async () => {
    try {
      const res = await axios.get(`${url}/all`);
      setTodos(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log('inside useEffect');
    getAllTodos();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
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
      {todos.map((item) => (
        <p>{item.title}</p>
      ))}
      <button type="text" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
