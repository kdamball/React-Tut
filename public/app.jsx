var Profiles = React.createClass({
  render: function(){
    return (
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        {[1,2,3].map(function(e){
          return <ProfileBox key={e} />
        })}
      </div>
    )
  }
});


React.render(
  <Profiles />,
  document.getElementById('content')
)