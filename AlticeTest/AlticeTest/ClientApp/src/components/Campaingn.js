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
                <th>Has5g</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {campaingns.map(campaingn =>
                <tr key={campaingn.Name}>
                  <td>{campaingn.Age}</td>
                  <td>{campaingn.Has5g}</td>
                  <td>{campaingn.Date}</td>
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
            <h1 id="tabelLabel" >Campaingns Has 5G</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
          </div>
        );
      }

    async populateCampaingnData() {
        const response = await fetch('/api/Campaingns');
        const data = await response.json();
        this.setState({ campaingns: data, loading: false });
     }
}