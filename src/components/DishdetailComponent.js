import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderComments({ comments }) {
  if (comments != null) {
    return comments.map((comment) => (
      <ul key={comment.id} className="list-unstyled">
        <li className="mb-2">{comment.comment}</li>
        <li>
          -- {comment.author}{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comment.date)))}
        </li>
      </ul>
    ));
  } else {
    console.log("here");
    return <div />;
  }
}
function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}
const Dishdetail = (props) => {
  console.log(props);
  console.log("here");
  return (
    <div className="row">
      {props.image}
      <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <RenderComments comments={props.dish.comments} />
      </div>
    </div>
  );
};
export default Dishdetail;
