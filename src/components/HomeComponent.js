import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({item, url}) {
  return(
    <Card>
        <CardImg src={url + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
  );

}

function Home(props) {
    return(
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard item={props.dish} url={props.url}/>
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} url={props.url}/>
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} url={props.url}/>
          </div>
        </div>
      </div>
    );
}

export default Home;