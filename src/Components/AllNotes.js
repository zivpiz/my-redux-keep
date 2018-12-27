import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import NoteSubmit from './NoteSubmit';
import {dragCheckedNote, dragUncheckedNote} from "../actions";
import './../style.css';


const SortableItem = SortableElement(({note}) => <li>{note}</li>);

const SortableList = SortableContainer(({notes}) => {
    return (
        <ol>
            {notes.map((note, index) => (
                <SortableItem key={index} index={index} note={note}/>
            ))}
        </ol>
    )
});

class AllNotes extends Component {
    constructor(props) {
        super(props);
        this.onUncheckedEnd = this.onUncheckedEnd.bind(this);
        this.onCheckedEnd = this.onCheckedEnd.bind(this);
    }

    onUncheckedEnd = ({oldIndex, newIndex}) => this.props.dragUncheckedNote(oldIndex, newIndex);
    onCheckedEnd = ({oldIndex, newIndex}) => this.props.dragCheckedNote(oldIndex, newIndex);

    render() {
        return (
            <div className="AllNotes">
                <SortableList className="uncheckedNotes" notes={this.props.uncheckedNotes}
                              onSortEnd={this.onUncheckedEnd}/>
                <NoteSubmit/>
                <SortableList className="checkedNotes" notes={this.props.checkedNotes} onSortEnd={this.onCheckedEnd}/>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        uncheckedNotes: state.uncheckedNotes,
        checkedNotes: state.checkedNotes
    }
);

export default connect(mapStateToProps, {dragUncheckedNote, dragCheckedNote})(AllNotes);
