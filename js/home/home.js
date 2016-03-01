import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Squared from './Squared';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header title="Home"/>
                <Squared/>
            </div>
        )
    }
}

module.exports = Home;
