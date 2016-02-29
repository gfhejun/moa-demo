import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="footer">
            {this.props.title}
        </div>

    }
}

module.exports = Footer;