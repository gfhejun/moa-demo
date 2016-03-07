import React from 'react';
import {Link} from 'react-router';
require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");

class Header extends React.Component {
    render() {
        var type = this.props.type;
        if (type == 'Home') {
            return (
                <div className="container-fluid header">
                    <div className="row">
                        <div className="col-xs-3"></div>
                        <div className="col-xs-6 header-title">{this.props.title}</div>
                        <div className="col-xs-3 header-logout">登出</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container-fluid header">
                    <div className="row">
                        <div className="col-xs-3">
                            <Link to={this.props.back}>
                                <span className="glyphicon glyphicon-menu-left header-back" aria-hidden="false"></span>
                            </Link>
                        </div>
                        <div className="col-xs-6 header-title">{this.props.title}</div>
                        <div className="col-xs-3"></div>
                    </div>
                </div>
            )
        }
    }
}

module.exports = Header;