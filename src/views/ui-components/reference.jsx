import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';


const Reference = () => {
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
            Reference
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                    
                        <h2> Tools used in this web demo include：
                      </h2>
                        <Alert color="secondary">
                        <h6><b>Frontend:</b></h6>                      
                
                                <b>Personal website uses Reactjs. Demos use streamlit which also uses Reactjs as frontend.</b>                          
                               </Alert>

                               <Alert color="secondary">
                        <h6><b>Backend:</b></h6>                      
                        
                                <b>Each demo uses streamlit which integrate Tornado as backend. Demos are deployed on GKE of google cloud.</b>                          
                               </Alert>
                          
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Useful Machine Learning Tools
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                           <Alert color="secondary">
                        <h6><b>Machine Learning monitor, tracking and pipeline tools:</b></h6>                      
                             
                                <b>Mlflow, kubeflow</b>                          
                               </Alert>
                        <Alert color="secondary">
                        <h6><b> </b></h6>                      
                
                                <b></b>                          
                               </Alert>

                               <Alert color="secondary">
                        <h6><b> </b></h6>                      
                        
                                <b></b>                          
                               </Alert>
                               
                    </div>
                </CardBody>
            </Card>
           
           
        </div>
    );
}

export default Reference;
