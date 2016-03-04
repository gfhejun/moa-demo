import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
    render() {
        var type = this.props.type;
        if (type == 'Home'){
            return(
                <div className="header">
                    <div className="header-title">{this.props.title}</div>
                    <div className="header-logout">退出</div>
                </div>
            )
        }else{
            return (
                <div className="header">
                    <Link className="header-back" to={this.props.back}>返回</Link>
                    <div className="header-title">{this.props.title}</div>
                </div>
            )
        }
    }
}

module.exports = Header;