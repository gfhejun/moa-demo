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
    render: function () {
        return <span>
            <div id={this.props.id} className="icon"></div>
        </span>
    }
});

var icons = [
    {name:"OA"},
    {name:"ERP"},
    {name:"LMS"}
];

var Content = React.createClass({
    render: function () {
        return <div className="content">
            {
                icons.map(function(icon){
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
    <Content title="Content"/>,
    document.getElementById("content")
);