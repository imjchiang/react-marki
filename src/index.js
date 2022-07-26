import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

const container = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(
    // <React.StrictMode>
        <Router>
            <App />
        </Router>
    // </React.StrictMode>
)