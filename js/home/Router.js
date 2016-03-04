import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Home from './Home';
import ERP from '../erp/ERP';
import Notification from '../erp/Notification';

require('../../css/home/home.css');

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="erp" component={ERP} />
        <Route path="notification" component={Notification}/>
    </Router>
);

ReactDOM.render(
    router,
    document.getElementById('container')
);
