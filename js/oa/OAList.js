import React from 'react';
import Header from '../home/Header';

class OAList extends React.Component {
    render() {
        return (
            <div>
                <Header title={this.props.title} type="other" back="oa"/>
            </div>
        )
    }
}

module.exports = OAList;