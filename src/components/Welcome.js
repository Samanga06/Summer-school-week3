import React from 'react';

function Welcome() {
  const divstyle = {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  return (
    <div style={divstyle}>
      <h1>Hello</h1> 
      <h1>Welcome to Event Maker</h1>
    </div>
  );
}

export default Welcome;
