import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <LodaUsers></LodaUsers>

      <Person brand="apple" price="5000"></Person>
      <Person brand="Microsoft" price="1000"></Person>
      <Person brand="google" price="100"></Person>
      <Person></Person>
    </div>
  );
}

function LodaUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  return (
    <div><h1>Users Loaded:{users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )

}

function User(props) {
  return (
    <div className="user">
      <h2>Name:{props.name}</h2>
      <p>call me baby!!{props.phone}</p>
    </div>
  )

}

function Person(props) {

  const [points, setPoints] = useState(1);



  const myStyle = {
    background: 'lightblue',
    border: '3px  solid  blue',
    margin: '10px',
    padding: '5px',
    borderRadius: '10px'

  }

  const handleAddpoints = () => {
    const newPints = points * 2;
    setPoints(newPints);
  }



  return (<div style={myStyle}><h1>sakib  al hasan</h1>
    <h4>Profession:Cricketer {props.brand}</h4>

    <h5>asking money, price:{props.price}, I  have points: {points}</h5>

    <p style={{ color: 'magenta', fontWeight: 'bold' }}>I CART WRITE MY OWN COMPONENT</p>

    <button onClick={handleAddpoints}>Add points</button>
  </div>
  )




}

export default App;
