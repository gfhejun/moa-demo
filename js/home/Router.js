import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import Home from './Home';
import ERP from '../erp/ERP';

require('../../css/home/home.css');


ReactDOM.render(
    <Router>
        <Route path="ERP" component={ERP}/>
        <Route path="*" component={Home}/>
    </Router>,
    document.getElementById('container')
);