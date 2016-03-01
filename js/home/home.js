import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Squared from './Squared';
require('../../css/home/index.css');

ReactDOM.render(
    <Header title="Home"/>,
    document.getElementById("header")
);

ReactDOM.render(
    <Squared/>,
    document.getElementById("content")
);
