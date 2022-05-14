import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = props => {
  return (
    <ul>
      <li>
        <NavLink activeClassName={props.activeLinkClassName} exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName={props.activeLinkClassName} exact to="support">Support Form</NavLink>
      </li>
      <li>
        <NavLink  activeClassName={props.activeLinkClassName} exact to="name">Form name</NavLink>
      </li>
      <li>
        <NavLink  activeClassName={props.activeLinkClassName} exact to="auth">Login</NavLink>
      </li>
    </ul>
  )
}