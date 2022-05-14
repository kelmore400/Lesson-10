import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
  const value = props.value;
  return <li>{value}</li>
}

export const List = ({ items }) => {
  return (
    <ul>{
      items.map(item => <ListItem key={item.toString()} value={item}/>)
    }</ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number)
}

List.defaultProps = {
  items: []
}

