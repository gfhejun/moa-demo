import React from 'react';

import Header from '../home/Header';
import Squared from '../home/Squared';

var items = [
    {id:"notification",name: "消息提醒",url:"notification"},
    {id:"vacation",name: "休假申请",url:"vacation"}
];

class ERP extends React.Component{
    render(){
        return(
            <div>
                <Header title="ERP" type="other" back="/"/>
                <Squared className="main-content" items={items}/>
            </div>
        )
    }
}

module.exports = ERP;