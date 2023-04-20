import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import DishComments from './DishComments';
import CommentForm from './CommentForm';
import { baseURL } from '../../Redux/baseURL';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top alt={props.dish.name} src={baseURL + props.dish.image} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price} BDT
                    </CardText>
                    <hr />
                    <DishComments comments={props.comments} commentsIsLoading={props.commentsIsLoading} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;