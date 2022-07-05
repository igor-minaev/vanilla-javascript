import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const names = ['Dimych', 'Sveta', 'Katya', 'Victor']
    const users = [{name: 'Dimych'}, {name: 'Sveta'}, {name: 'Katya'}, {name: 'Victor'}]
    const liElements = users.map((u,index) => <li key={index}>{u.name}</li>)
    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
