import arrayMove from "array-move";
import {createNoteFromObj, changeCheckAndCreateNote} from "./index";

export const checkedNotesReducer = (checkedList = [], action) => {
    switch (action.type) {
        case 'CREATE_CHECKED_NOTE':
            return [...checkedList, createNoteFromObj(action.payload)];
        case 'CHANGE_CHECKED_NOTE':
            return checkedList.filter(elem => elem.props.id !== action.payload.id);
        case 'CHANGE_UNCHECKED_NOTE':
            return [...checkedList, changeCheckAndCreateNote(action.payload)];
        case 'DRAG_CHECKED_NOTE':
            return arrayMove(checkedList, action.payload.oldIndex, action.payload.newIndex);
        default:
            return checkedList;
    }
};