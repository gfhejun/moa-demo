import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="header">
            {this.props.title}
        </div>
    }
}

module.exports = Header;