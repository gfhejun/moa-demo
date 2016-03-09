import React from 'react';
import Header from './Header';
import Squared from './Squared';

var items = [
    {id:"oa",name:"OA",url:"oa"},
    {id:"erp",name:"ERP",url:"erp"},
    {id:"lms",name:"LMS",url:"lms"},
    {id:"ams",name:"AMS",url:"ams"},
    {id:"crm",name:"CRM",url:"crm"}
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
