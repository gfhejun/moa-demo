import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Squared from './Squared';
require('../../css/home/index.css');

ReactDOM.render(
    <Header title="Home"/>,
    document.getElementById("header")
);

ReactDOM.render(
    <Footer title="Footer"/>,
    document.getElementById("footer")
);

ReactDOM.render(
    <Squared/>,
    document.getElementById("content")
);
