import React from 'react';
import Header from '../home/Header';

require('../../css/erp/erp.css');

var notifications = [
    {
        id:"4",
        title:"薪酬发放提醒",
        content:"2016年2月薪酬已发放，详情请到ERP查看。",
        author:"人力资源管理部",
        date:"2016-03-08"
    },
    {
        id:"3",
        title:"薪酬发放提醒",
        content:"2016年1月薪酬已发放，详情请到ERP查看。",
        author:"人力资源管理部",
        date:"2016-02-08"
    },
    {
        id:"2",
        title:"考勤提醒",
        content:"您在1月30日无考勤记录，请及时填写外出记录。",
        author:"人力资源管理部",
        date:"2016-02-01"
    },
    {
        id:"1",
        title:"薪酬发放提醒",
        content:"2015年12月薪酬已发放，详情请到ERP查看。",
        author:"人力资源管理部",
        date:"2016-01-08"
    }
];

class NotificationItem extends React.Component{
    render(){
        return(
            <div className="erp-notification">
                <div className="erp-title">{this.props.title}</div>
                <div className="erp-content">{this.props.content}</div>
                <div className="erp-author">{this.props.author}</div>
                <div className="erp-date">{this.props.date}</div>
            </div>
        )
    }
}

class NotificationList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {notifications: props.notifications};
    }

    render(){
        return(
            <div className={this.props.className}>
                {
                    this.state.notifications.map(function (notification) {
                        return(
                            <NotificationItem
                                key={notification.id}
                                title={notification.title}
                                content={notification.content}
                                author={notification.author}
                                date={notification.date}
                                />
                        )
                    })
                }
            </div>
        )
    }
}

class Notification extends React.Component{
    render(){
        return(
            <div>
                <Header title="消息通知" type="Other" back="erp"/>
                <NotificationList className="main-content erp-list" notifications={notifications}/>
            </div>
        )
    }
}

module.exports = Notification;