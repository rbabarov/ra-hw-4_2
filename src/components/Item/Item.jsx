import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function Item({date, km, onDeleteNote, id,}) {
  const formattedDate = moment(date).format("DD.MM.YYYY");

  return (
    <div className="item">
      <div className="item-date">{formattedDate}</div>
      <div className="item-km">{km}</div>
      <div className="item-buttons-block">
        <div className="item-del material-icons" onClick={() => onDeleteNote(id)}>delete_outline</div>
      </div>
    </div>
  );
}

Item.propTypes = {
  date: PropTypes.string.isRequired,
  km: PropTypes.number.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};