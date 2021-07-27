import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishdetailComponent extends Component {
  renderComments(comments) {
    if (comments != null) {
      return comments.map((comment) => (
        <ul key={comment.id} className="list-unstyled">
          <li className="mb-2">{comment.comment}</li>
          <li>
            -- {comment.author} {comment.date}
          </li>
        </ul>
      ));
    } else return <div />;
  }
  render() {
    console.log(this.props);
    return (
      <div className="row">
        {this.props.image}
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              top
              src={this.props.dish.image}
              alt={this.props.dish.name}
            />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    );
  }
}
export default DishdetailComponent;
