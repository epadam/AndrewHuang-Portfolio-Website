import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

import tud from '../../assets/images/icon/tud.png';
import kul from '../../assets/images/icon/kul.png';
import nthu from '../../assets/images/icon/nthu.jpg';
import vis from '../../assets/images/icon/vis.png';
import mfield from '../../assets/images/icon/mfield.png';
import me from '../../assets/images/users/8.jpg';
const Alerts = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Introduce myself
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                    <img
                                    src={me}
                                    align="left"
                                    alt="me"
                                    className="rounded-circle"
                                    width="200"
                                    Style="vertical-align:middle;margin:5px 5px"
                                />
                        <h5>My name is Andrew Huang (Cheng Chiang). During my master thesis at TUD, I succesfully applied CNN in AV1 video intra encoding and accelerate the encoding process with minor quality loss. 
                        After my master, I tried to enhance my knowledgdes in machine learning, and follow the newest development of AI (<a href="https://github.com/epadam/machine-learning-overview">https://github.com/epadam/machine-learning-overview</a>).
                            <br />
                            <p/>
                            After learning machine learning, I realize the industry I worked before or many other fields can benefit from this technology.
 I would like help companies integrate machine learning into their products, services or daily operations.
<br />
<p/>
This website includes some demos of machine learning applications. 

                            <br />
                            

                        </h5>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Education
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Alert color="success">
                        <h2><b>TU Dresden</b> (join degree)</h2><h6>2017-2019, <a target="_blank" rel="noopener noreferrer" href="https://onderwijsaanbod.kuleuven.be/opleidingen/e/SC_54299343.htm#cgs=54305334&bl=all">Nanoelectronics</a>, Germany</h6>
                            
                            <img
                                    src={tud}
                                    align="right"
                                    alt="tud"
                                    className="rounded-circle"
                                    width="60"
                                    Style="vertical-align:middle;margin:5px 5px"
                                />
                                <br />
                                <b>Master Thesis:</b>
                            <br />
                            <a target="_blank" rel="noopener noreferrer" href="https://cnn-av1-intra-encoder.readthedocs.io/en/latest/index.html"><b>Convolutional Neural Network for AV1 video intra encoding acceleration</b></a> 
                            <br />
                            <b>In this work, I create the dataset by encoding many videos from original encoder. The trained CNN model is to replace partition algorithm in the original model and accelerate the encoding process.</b>
              </Alert>
                        <Alert color="warning">
                        <h2><b>KU Leuven</b> (join degree)</h2><h6>2016-2017, <a target="_blank" rel="noopener noreferrer" href="https://onderwijsaanbod.kuleuven.be/opleidingen/e/SC_54299343.htm#cgs=54305334&bl=all">Nanoelectronics</a>, Belgium</h6>
                        <img
                                    src={kul}
                                    align="right"
                                    alt="kul"
                                    className="rounded-circle"
                                    width="60"
                                    Style="vertical-align:middle;margin:5px 5px"
                                />
                                <br />
                                <b>Project Works:</b>
                            <br />
                            <a><b>RSA design on FPGA</b></a>
                            <br />
                            <a><b>Monte carlo simulation for electron distribution in CCD detector</b></a>
                        
              </Alert>
                        <Alert color="secondary">
                        <h2><b>National Tsing Hua University</b></h2><h6>2011-2013, <a target="_blank" rel="noopener noreferrer" href="http://bmes.site.nthu.edu.tw/">Biomedical Engineering and Environmental Sciences</a>, Taiwan</h6>
                        <img
                                    src={nthu}
                                    align="right"
                                    alt="nthu"
                                    className="rounded-circle"
                                    width="60"
                                    Style="vertical-align:middle;margin:5px 5px"
                                />
                                <br />
                                <b>Master Thesis:</b>
                            <br />
                            <a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1016/j.ijhydene.2014.03.029">A well-dispersed catalyst on porous silicon micro-reformer for enhancing adhesion in the catalyst-coating process</a>
                            <br />
                            <b>In this work, I design different methanol and oxygen microchannel reactors for hydrogen generation and successfully use PVA for catalyst coating in microchannel. The result is published in journal.</b>
              </Alert>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-2*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Career Experiences
          </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert color="light">
                        <h2><b>Semiconductor Engineer</b></h2><h6>2015-2016, <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Vanguard_International_Semiconductor_Corporation">Vanguard International Semiconductor Corporation</a>, Taiwan</h6>
                        <img
                                    src={vis}
                                    align="right"
                                    alt="vis"
                                    className="rounded-circle"
                                    width="60"
                                    Style="vertical-align:middle;margin:5px 5px"
                                />
                                <br />
                                <b>Work Achievments:</b>
                            <br />
                            <a><b>Failure analysis, yield improvement and process optimization</b></a> 
              </Alert>
                        <Alert color="success">
                        <h2><b>System Engineer</b></h2><h6>2014-2015, <a target="_blank" rel="noopener noreferrer" href="http://www.m-field.com.tw/about.php">M-FIELD ENERGY LTD</a>, Taiwan</h6>
                        <img
                                    src={mfield}
                                    align="right"
                                    alt="mfield"
                                    className="rounded-circle"
                                    width="60"
                                    Style="vertical-align:middle;margin:5px 5px"
                                />
                                <br />
                                <b>Work Achievments:</b>
                            <br />
                            <a><b>Hydrogen generator development (Labview)</b></a>
                            <br />
                            <a><b>Fuel cell power euipments development (C)</b></a>  
              </Alert>
                      
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-3*/}
            {/* --------------------------------------------------------------------------------*/}
            
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Skills
          </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert color="success">
                            <h4 className="alert-heading">Language:</h4>
                            
                                English: fluent
                                <br />
                                German: medium
                                <br />
                                Chinese: fluent                                    
                        </Alert>
                        <Alert color="secondary">
                        <h4 className="alert-heading">Programming:</h4>
                        Python, Javascript, C
  
                             </Alert>
                             </div>
                             </CardBody>
            </Card>
                        

            
           
            

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default Alerts;
