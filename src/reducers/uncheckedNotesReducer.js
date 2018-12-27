import arrayMove from "array-move";
import {changeCheckAndCreateNote, createNoteFromObj} from "./index";

export const uncheckedNotesReducer = (uncheckedList = [], action) => {
    switch (action.type) {
        case 'CREATE_UNCHECKED_NOTE':
            return [...uncheckedList, createNoteFromObj(action.payload)];
        case 'CHANGE_CHECKED_NOTE':
            return [...uncheckedList, changeCheckAndCreateNote(action.payload)];
        case 'CHANGE_UNCHECKED_NOTE':
            return uncheckedList.filter(elem => elem.props.id !== action.payload.id);
        case 'DRAG_UNCHECKED_NOTE':
            return arrayMove(uncheckedList, action.payload.oldIndex, action.payload.newIndex);
        default:
            return uncheckedList;
    }
};

