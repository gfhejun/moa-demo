import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../home/Header';
import Squared from '../home/Squared';

var items = [
    {id:"notification",name: "消息提醒"},
    {id:"vacation",name: "休假申请"}
];

class ERP extends React.Component{
    render(){
        return(
            <div>
                <Header title="ERP" type="other"/>
                <Squared className="main-content" items={items}/>
            </div>
        )
    }
}

module.exports = ERP;