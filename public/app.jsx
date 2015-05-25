var Profiles = React.createClass({
  render: function(){
    return (
      <div>
        <ProfileBox />
        <ProfileBox />
        <ProfileBox />
      </div>
    )
  }
});


React.render(
  <Profiles />,
  document.getElementById('content')
)