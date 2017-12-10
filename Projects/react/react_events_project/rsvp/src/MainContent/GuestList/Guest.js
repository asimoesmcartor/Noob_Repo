import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = props =>
          <li>
            <GuestName
            isEditing={props.isEditing}
            handleNameEdits={e => props.setNameAt(e.target.value)}>
              {props.name}
            </GuestName>
            <label>
              <input
                type="checkbox"
                checked={props.isConfirmed}
                onChange={props.handleConfirmation} /> Confirmed
            </label>
            <button className="editButton" onClick={props.handleToggleEditing}>{props.isEditing ? "save" : "edit"}</button>
            <button className="removeButton" onClick={props.handleRemove} >remove</button>
          </li>;


Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Guest;
