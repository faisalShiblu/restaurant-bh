import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap'
import { connect } from 'react-redux'
import * as actionType from './../../Redux/ActionType'

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, comment, author) => dispatch({
            type: actionType.ADD_COMMENT,
            payload: {
                dishId: dishId,
                rating: rating,
                comment: comment,
                author: author
            }
        })
    }
}

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '',
            comment: '',
            author: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        this.props.addComment(this.props.dishId, this.state.rating, this.state.comment, this.state.author)
        this.setState({
            rating: '',
            comment: '',
            author: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text" name='author' value={this.state.author} placeholder='Your name'
                        required onChange={this.handleInputChange} />
                    <br />
                    <Input type="select" name='rating' value={this.state.rating}
                        onChange={this.handleInputChange} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input type="textarea" name='comment' value={this.state.comment} onChange={this.handleInputChange} placeholder='Your comment' />
                    <br />
                    <Button type='submit'>Submit Comment</Button>
                </Form>
            </div>
        )
    }


};

export default connect(null, mapDispatchToProps)(CommentForm);