import React, { Component } from 'react';
import Dishes from '../../Data/Dishes.js';
import Comments from '../../Data/Comments.js';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class Menu extends Component {
    state = {
        dishes: Dishes,
        comments: Comments,
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

        const menu = this.state.dishes.map(d => {
            return (<MenuItem dish={d} key={d.id} ondishSelect={() => this.ondishSelect(d)} />);
        });

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const commentsOfDishes = this.state.comments.filter(comment => comment.dishId
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

export default Menu;