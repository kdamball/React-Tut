var Profiles = React.createClass({
  render: function(){
    return (
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
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