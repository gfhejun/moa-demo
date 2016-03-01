import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import ERP from '../erp/ERP';

var icons = [
    {name: "OA"},
    {name: "ERP"},
    {name: "LMS"},
    {name: "AMS"},
    {name: "CRM"}
];

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="icon" to={this.props.id}>
                <div
                    id={this.props.id}
                    className="image">
                </div>
                <div className="title">{this.props.id}</div>
            </Link>
        )
    }
}

class Squared extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                {
                    icons.map(function (icon) {
                        return <Icon key={icon.name} id={icon.name}/>
                    })
                }
            </div>
        )
    }
}

module.exports = Squared;