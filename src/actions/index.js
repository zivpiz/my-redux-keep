
export const createUncheckedNote = noteObj =>
    ({type: 'CREATE_UNCHECKED_NOTE', payload: noteObj});

export const createCheckedNote = noteObj =>
    ({type: 'CREATE_CHECKED_NOTE', payload: noteObj});

export const changeUncheckedNote = noteProps =>
    ({type:'CHANGE_UNCHECKED_NOTE', payload: noteProps});

export const changeCheckedNote = noteProps =>
    ({type:'CHANGE_CHECKED_NOTE', payload: noteProps});

export const dragUncheckedNote = (oldIndex, newIndex) =>
    ({type:'DRAG_UNCHECKED_NOTE', payload: {oldIndex, newIndex}});

export const dragCheckedNote = (oldIndex, newIndex) =>
    ({type:'DRAG_CHECKED_NOTE', payload: {oldIndex, newIndex}});
