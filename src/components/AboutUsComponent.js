import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  Media,
} from "reactstrap";

function AboutUs(props) {
  function RenderLeader({ leader }) {
    return (
      <Media className="mt-5" style={{ display: "flex" }}>
        <Media
          object
          left
          src={leader.image}
          alt={leader.name}
          className="my_image"
        />
        <Media className="marginn" body>
          <Media heading>{leader.name}</Media>
          <p>{leader.designation}</p>
          {leader.description}
        </Media>
      </Media>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>AboutUs</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>AboutUs</h3>
          <hr />
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col-12 col-md-6 m-1">
          <h1>Our History</h1>
          <p>
            Started in 2010, Ristorante con Fusion quickly established itself as
            a culinary icon par excellence in Hong Kong. With its unique brand
            of world fusion cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in Hong Kong. Featuring four of
            the best three-star Michelin chefs in the world, you never know what
            will arrive on your plate the next time you visit us.
          </p>
          <p>
            The restaurant traces its humble beginnings to{" "}
            <em>The Frying Pan</em>, a successful chain started by our CEO, Mr.
            Peter Pan, that featured for the first time the world's best
            cuisines in a pan.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <br></br>
              <div className="row align-items-start">
                <div className="col-12 col-md-5">
                  <strong>Started</strong>
                </div>
                <div className="col-12 col-md-6">
                  <p>3 Feb, 2013</p>
                </div>
              </div>
              <div className="row align-items-start">
                <div className="col-12 col-md-5">
                  <strong>Major Stake Holder</strong>
                </div>
                <div className="col-12 col-md-6">
                  <p>HK Fine Foods Inc.</p>
                </div>
              </div>
              <div className="row align-items-start">
                <div className="col-12 col-md-5">
                  <strong>Last Year's Turnover</strong>
                </div>
                <div className="col-12 col-md-6">
                  <p>$1,250,375</p>
                </div>
              </div>
              <div className="row align-items-start">
                <div className="col-12 col-md-5">
                  <strong>Employees</strong>
                </div>
                <div className="col-12 col-md-6">
                  <p>40</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className=".col-sm-12 .col-md-6 .offset-md-3">
          <Card>
            <CardBody>
              <blockquote className="blockquote mb-0">
                <p className="autho">
                  You better cut the pizza in four pieces because I'm not hungry
                  enough to eat six.
                </p>
                <footer className="blockquote-footer">
                  Yogi Berra,
                  <cite title="Source Title">
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
              <br></br>
              <br></br>
            </CardBody>
          </Card>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h2>Corporate Leadership</h2>
          </div>
          <Media list>
            {props.leaders.map((leader) => (
              <RenderLeader key={leader.id} leader={leader} />
            ))}
          </Media>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
