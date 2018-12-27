import Note from "../Components/Note";
import React from "react";
import {combineReducers} from 'redux';

import {uncheckedNotesReducer} from "./uncheckedNotesReducer";
import {checkedNotesReducer} from "./checkedNotesReducer";
import {nextIdReducer} from './nextIdReducer';

export const createNoteFromObj = (noteObj) =>
    <Note text={noteObj.text} checked={noteObj.checked} id={noteObj.id}/>;

export const changeCheckAndCreateNote = (noteProps) =>
    <Note text={noteProps.text} checked={!noteProps.checked} id={noteProps.id}/>;

export default combineReducers({
    uncheckedNotes: uncheckedNotesReducer,
    checkedNotes: checkedNotesReducer,
    nextId: nextIdReducer
});