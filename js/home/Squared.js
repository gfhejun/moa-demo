import React from 'react';
import ReactDOM from 'react-dom';

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

    handleOnClick() {
        console.log(this.props.id);
    }

    render() {
        return (
            <div className="icon" onClick={this.handleOnClick.bind(this)}>
                <div
                    id={this.props.id}
                    className="image">
                </div>
                <div className="title">{this.props.id}</div>
            </div>
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