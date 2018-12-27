import React from 'react';
import {connect} from 'react-redux';
import {changeCheckedNote, changeUncheckedNote} from "../actions";
import './../style.css';


const handleChange = (props) => {
    if (props.checked)
        props.changeCheckedNote(props);
    else props.changeUncheckedNote(props);
};

const Note = (props) => {
    return (
        <div className="Note">
            <input type="checkbox" className="NoteCheckbox" onChange={() => handleChange(props)}
                   checked={props.checked}/>
            <label className={`NoteTextChecked-${props.checked}`}>{props.text}</label>
        </div>
    )
};

export default connect(null, {changeCheckedNote, changeUncheckedNote})(Note);