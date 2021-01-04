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


import MedMNIST from '../../assets/images/big/MedMNIST.jpg';
import ocr from '../../assets/images/big/ocr.jpg';

import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/img5.jpg';
import ThemeRoutes from '../../routes/routing.jsx';


const cv = () => {
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
                        <CardImg top width="100%" src={MedMNIST} />
                        <CardBody>
                            <CardTitle>Medical Image Classification and Segmentation</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>This demo collects different medical image datasets and uses different model for classification and segmentation</CardText>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><Button> Demo
                                             </Button></a>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={ocr} />
                        <CardBody>
                            <CardTitle>Annotator for GCN training data for OCR Information Extraction</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>OCR is relative mature task, however, the real challenge remains in information extraction, which can generate huge business vlaue.
                                Two solutions that are gaining attention include NLP and GCN. Both solution try to extract the information through the context.
                            </CardText>
                            <Button>under construction</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------
                    <Card>
                        <CardImg top width="100%" src={img3} />
                        <CardBody>
                            <CardTitle>Annotator</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>  */}
                </Col>
            </Row>

        </div>
    );
}

export default cv;





