var React = require('react');

var ProfileBox = React.createClass({

  getInitialState: function(){
    return {data: false}
  },

  updateAll: function(){
    this.fetchUsers();
  },

  fetchUsers: function(){
    return fetch("http://reqr.es/api/users/"+(Math.floor(Math.random()*12)+1))
      .then(function(res){return res.json()})
      .then(function(data){
        this.setState({data: data})
      }.bind(this))
  },

  componentDidMount: function(){
    this.fetchUsers();
  },

  render: function(){
    return (
      <div style={{
        cursor: "pointer",
        display: "inline-block",
        margin: "10px 20px",
        background: "rgba(08,55,123,0.8)",
        textAlign: "center"
      }}>
        <ProfilePic onPicClick={this.updateAll}  data={this.state.data} />
        <ProfileInfo onInfoClick={this.updateAll} data={this.state.data} />
      </div>
    )
  }
});


var ProfilePic = React.createClass({
  updateState: function(){
    this.props.onPicClick();
  },

  render: function(){
    return (
      <div>
        <img style={{width: "100%"}} src={this.props.data ? this.props.data.data.avatar : ""} onClick={this.updateState} />
      </div>
    );
  }
});


var ProfileInfo = React.createClass({
  updateState: function(){
    this.props.onInfoClick();
  },

  render: function(){
    return (
      <div>
        <p onClick={this.updateState}>
          {this.props.data ? (this.props.data.data.first_name + " " + this.props.data.data.last_name) : ""}
        </p>
      </div>
    )
  }
});

module.exports = ProfileBox;