import React, { Component } from 'react';
import { Alert } from 'reactstrap';
export class AddSucessCampaingn extends Component {
    static displayName = AddSucessCampaingn.name;

    constructor(props) {
        super(props);
      }
    
      render() {   
        return (
        <Alert color="success">
        Congratulations on submitting the questionnaire!!
        </Alert>
        );
      }
}