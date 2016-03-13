import React from 'react';
import Header from '../home/Header';
import Squared from '../home/Squared';

require('../../css/oa/oa.css');

var items = [
    {id:"toDo",name:"待办",url:"oalist"},
    {id:"toRead",name:"待阅",url:"oalist"},
    {id:"done",name:"已办",url:"oalist"},
    {id:"read",name:"已阅",url:"oalist"}
];

class OA extends React.Component {
    render() {
        return (
            <div>
                <Header title="OA" type="other" back="/"/>
                <Squared className="main-content" items={items}/>
            </div>
        )
    }
}

module.exports = OA;