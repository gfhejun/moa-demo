var Header = React.createClass({
    render: function () {
        return <div className="header">
            {this.props.title}
            </div>

    }
});

var Footer = React.createClass({
    render: function () {
        return <div className="footer">
            {this.props.title}
        </div>

    }
});

var Icon = React.createClass({
    handleOnClick: function () {
        console.log(this.props.id);
    },

    render: function () {
        return <span>
            <div id={this.props.id} className="icon" onClick={this.handleOnClick}></div>
        </span>
    }
});

var icons = [
    {name:"OA"},
    {name:"ERP"},
    {name:"LMS"},
    {name:"AMS"},
    {name:"HGB"}
];

var Squared = React.createClass({
    render: function () {
        return <div className="content">
            {
                this.props.datas.map(function(icon){
                    return <Icon key={icon.name} id={icon.name}/>
                })
            }
        </div>

    }
});

ReactDOM.render(
    <Header title="Home"/>,
    document.getElementById("header")
);
ReactDOM.render(
    <Footer title="Footer"/>,
    document.getElementById("footer")
);
ReactDOM.render(
    <Squared datas={icons}/>,
    document.getElementById("content")
);