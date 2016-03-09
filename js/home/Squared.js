import React from 'react';
import {Link} from 'react-router';

class Item extends React.Component {
    render() {
        return (
            <Link className="item" to={this.props.url}>
                <div
                    id={this.props.id}
                    className="item-image">
                </div>
                <div className="item-title">{this.props.name}</div>
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
            <div className={this.props.className}>
        {
            this.props.items.map(function(icon) {
                return <Item key={icon.id} id={icon.id} name={icon.name} url={icon.url}/>
            })
        }
            </div>
        )
    }
}

module.exports = Squared;