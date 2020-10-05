import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/List.module.scss';

const List = ({ list, listId }) => (
  <div className={style.container}>
    <h2>
      List
      {listId}
    </h2>
    <ul>
      {list.map(item => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

List.propTypes = {
  list: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  listId: PropTypes.number.isRequired,
};

export default List;
