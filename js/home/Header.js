import React from 'react';
import ReactDOM from 'react-dom';

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
                    <div className="header-back">返回</div>
                    <div className="header-title">{this.props.title}</div>
                </div>
            )
        }
    }
}

module.exports = Header;