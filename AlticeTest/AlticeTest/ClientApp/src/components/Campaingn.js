import React, { Component } from 'react';

export class Campaingn extends Component {
    static displayName = Campaingn.name;

    constructor(props) {
        super(props);
        this.state = { campaingns: [], loading: true };
      }
      componentDidMount() {
        this.populateCampaingnData();
      }
    
      static renderCampaingnsTable(campaingns) {
        return (
          <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Has 5G</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {campaingns.map(campaingn =>
                <tr key={campaingn.id}>
                  <td>{campaingn.name}</td>
                  <td>{campaingn.age}</td>
                  <td>{campaingn.has5g?'YES':'NO'}</td>
                  <td>{campaingn.date}</td>
                </tr>
              )}
            </tbody>
          </table>
        );
      }

      render() {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : Campaingn.renderCampaingnsTable(this.state.campaingns);
    
        return (
          <div>
            <h1 id="tabelLabel" >MEO campaigns want you !!! we want to know if you have 5G?</h1>
           
            {contents}
          </div>
        );
      }

    async populateCampaingnData() {
        const response = await fetch('/api/campaingns');
        const data = await response.json();
        this.setState({ campaingns: data, loading: false });
     }
}