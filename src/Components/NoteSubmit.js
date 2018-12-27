import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createCheckedNote, createUncheckedNote} from "../actions";

class NoteSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', checked: false};

        this.ConditionalBoxRender = this.ConditionalBoxRender.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitNote = this.submitNote.bind(this);
    }

    ConditionalBoxRender = () => this.state.text === '' ? '' : <input type="checkbox" onChange={this.handleCheck}/>;

    handleTextChange = (event) => this.setState({text: event.target.value});

    handleCheck = () => this.setState({checked: !this.state.checked}, () => this.submitNote());

    handleSubmit = (event) => {
        event.preventDefault();
        this.submitNote();
    };

    submitNote = () => {
        if (this.state.text === '')
            return;
        if (this.state.checked)
            this.props.createCheckedNote(Object.assign({id: this.props.nextId}, this.state));
        else
            this.props.createUncheckedNote(Object.assign({id: this.props.nextId}, this.state));
        this.setState({text: '', checked: false});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.ConditionalBoxRender()}
                <input type="text" placeholder="Take a note..." name="inputName"
                       value={this.state.text} onChange={this.handleTextChange} autoComplete="off"/>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({nextId: state.nextId});
export default connect(mapStateToProps, {createCheckedNote, createUncheckedNote})(NoteSubmit);