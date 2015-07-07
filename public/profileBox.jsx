var React = require('react');

var ProfileBox = React.createClass({

  getInitialState: function(){
    return {data: false}
  },

  updateUser: function(){
    this.fetchUser();
  },

  fetchUser: function(){
    return fetch("http://reqr.es/api/users/"+(Math.floor(Math.random()*12)+1))
      .then(function(res){return res.json()})
      .then(function(data){
        this.setState({data: data})
      }.bind(this))
  },

  componentDidMount: function(){
    this.fetchUser();
  },

  render: function(){
    return (
      <div style={{
        cursor: "pointer",
        display: "inline-block",
        margin: "10px 20px",
        background: "rgba(08,55,123,0.8)",
        textAlign: "center",
        minHeight: 120,
        minWidth: 100
      }}>
        <ProfilePic onPicClick={this.updateUser}  data={this.state.data} />
        <ProfileInfo onInfoClick={this.updateUser} data={this.state.data} />
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