import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return <div className="header">
            {this.props.title}
        </div>
    }
}

module.exports = Header;