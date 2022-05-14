import React from 'react';
import { Link } from 'react-router-dom';
const style = { color: "#fff" };

export const Login = () => {
  return (
    <React.Fragment>
      <h1>This is Login page</h1>
      <Link to="/" style={style}>Go Home</Link>
    </React.Fragment>
  )
}