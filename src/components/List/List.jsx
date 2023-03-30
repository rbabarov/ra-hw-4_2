import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

export default function List(props) {
  const { notes } = props;

  if (!notes.length) {
    return (
      <div className="list-empty-message">Нет записей. Начинай тренироваться и добавляй!</div>
    );
  }

  const arrNotes = notes.map((note) => note);
  const notesSortedByDateFromNew = arrNotes.sort((a, b) => {
    const collator = new Intl.Collator();
    return collator.compare(b.date, a.date);
  });

  return (
    <div>
      <div className="list-headers">
        <div className="list-headers-date">Дата</div>
        <div className="list-headers-km">Км</div>
      </div>
      <div className="list-list">
        {notesSortedByDateFromNew.map((o) => (
          <Item
            key={o.id}
            id={o.id}
            date={o.date}
            km={o.km}
            onDeleteNote={props.onDeleteNote}
          />
        ))}
      </div>
    </div>
  );
}

List.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    km: PropTypes.number.isRequired,
  })).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};