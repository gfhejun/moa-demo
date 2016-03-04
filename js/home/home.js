import React from 'react';
import Header from './Header';
import Squared from './Squared';

var items = [
    {id:"oa",name: "OA"},
    {id:"erp",name: "ERP"},
    {id:"lms",name: "LMS"},
    {id:"ams",name: "AMS"},
    {id:"crm",name: "CRM"}
];

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header title="主页" type="Home"/>
                <Squared className="main-content" items={items}/>
            </div>
        )
    }
}

module.exports = Home;
