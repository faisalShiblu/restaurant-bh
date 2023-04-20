import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux'
import { addComment, fetchDishes, fetchComments } from '../../Redux/ActionCreators';
import Loading from './Loading';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, comment, author) => dispatch(addComment(dishId, rating, comment, author)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    ondishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    }


    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = 'Menu';

        if (this.props.dishes.isLoading) {
            return (<Loading />);
        } else if (this.props.dishes.errorMessage != null) {
            return (
                <Alert color="danger">
                    {this.props.dishes.errorMessage}
                </Alert>
            );
        }
        else {
            const menu = this.props.dishes.dishes.map(d => {
                return (<MenuItem dish={d} key={d.id} ondishSelect={() => this.ondishSelect(d)} />);
            });

            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const commentsOfDishes = this.props.comments.comments.filter(comment => comment.dishId
                    === this.state.selectedDish.id
                )

                dishDetail = <DishDetail dish={this.state.selectedDish} comments={commentsOfDishes}
                    key={this.state.selectedDish.id} addComment={this.props.addComment}
                    commentsIsLoading={this.props.comments.isLoading} />
            }

            return (
                <div className='container' >
                    <div className='row'>
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen}
                            style={{ maxWidth: '700px', width: '100%' }} >
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color='secondary' onClick={this.toggleModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);