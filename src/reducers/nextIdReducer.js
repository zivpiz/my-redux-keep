export const nextIdReducer = (id = 0, action) => {
    switch (action.type) {
        case 'CREATE_CHECKED_NOTE':
        case 'CREATE_UNCHECKED_NOTE':
            return ++id;
        default:
            return id;
    }
};