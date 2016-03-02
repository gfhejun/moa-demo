import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import Home from './Home';
import ERP from '../erp/ERP';
import Notification from '../erp/Notification';

require('../../css/home/home.css');

ReactDOM.render(
    <Router>
        <Route path="erp" component={ERP}/>
        <Route path="notification" component={Notification}/>
        <Route path="*" component={Home}/>
    </Router>,
    document.getElementById('container')
);