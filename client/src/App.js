import React, { Component } from 'react';
import Header from './components/Header';
import Book from './components/Books';
import './App.css';

class App extends Component {
    render() {
        return ( <
            div className = 'App' >
            <
            Header / >
            <
            Book / >
            <
            /div>
        );
    }
}

export default App;