import React, { Component } from 'react';

export class AddSucessCampaingn extends Component {
    static displayName = AddSucessCampaingn.name;

    constructor(props) {
        super(props);
      }
    
      render() {   
        return (
          <div>
            <h1 id="tabelLabel" >Campaingns Has 5G</h1>
            <p>Congratulations on submitting the questionnaire.</p>
          </div>
        );
      }
}