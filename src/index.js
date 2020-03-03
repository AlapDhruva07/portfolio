import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import Home from './Home';
import MyPort from './MyPort';
import About from './About';
import Contact from './Contact';
import Location from './Location';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Nav />, document.getElementById('header'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<MyPort />, document.getElementById('portfolio'));
ReactDOM.render(<About />, document.getElementById('aboutme'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<Location />, document.getElementById('location'));
ReactDOM.render(<Footer />, document.getElementById('footer'));



serviceWorker.unregister();
