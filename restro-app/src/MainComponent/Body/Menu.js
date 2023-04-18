import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
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

    render() {
        document.title = 'Menu';

        const menu = this.props.dishes.map(d => {
            return (<MenuItem dish={d} key={d.id} ondishSelect={() => this.ondishSelect(d)} />);
        });

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const commentsOfDishes = this.props.comments.filter(comment => comment.dishId
                === this.state.selectedDish.id
            )

            dishDetail = <DishDetail dish={this.state.selectedDish} comments={commentsOfDishes}
                key={this.state.selectedDish.id} />
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

export default connect(mapStateToProps)(Menu);