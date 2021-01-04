import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';



import rasa from '../../assets/images/big/rasa.png';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/img5.jpg';
import ThemeRoutes from '../../routes/routing.jsx';


const nlp = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={rasa} />
                        <CardBody>
                            <CardTitle>Rasa chatbot</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>A chatbot includes NLU, Dialog Manager(Dialogue State Tracker, Dialogue Policy Optimisation), NLG</CardText>
                            <Button >Demo</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------
                    <Card>
                        <CardImg top width="100%" src={img2} />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>*/}
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------
                    <Card>
                        <CardImg top width="100%" src={img3} />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>*/}
                </Col>
            </Row>

        </div>
    );
}

export default nlp;





