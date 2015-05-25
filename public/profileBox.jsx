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
      <div>
        <ProfilePic onPicClick={this.updateAll}  data={this.state.data} />
        <ProfileInfo data={this.state.data} />
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
        <img style={{width: 100, height: 100}} src={this.props.data ? this.props.data.data.avatar : ""} onClick={this.updateState} />
      </div>
    );
  }
});


var ProfileInfo = React.createClass({
  render: function(){
    return (
      <div>
        <p >
          {this.props.data ? (this.props.data.data.first_name + " " + this.props.data.data.last_name) : ""}
        </p>
      </div>
    )
  }
});