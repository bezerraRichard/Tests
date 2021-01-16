import React, { Component } from 'react';
import { useHistory,Redirect } from 'react-router-dom';

export class AddCampaingn extends Component {
    static displayName = AddCampaingn.name;

    constructor(props) {
        super(props);
        this.state = { campaingn: {name:'',age:'',has5g:false}, loading: true };
      }
    
      componentDidMount() {
        //this.populateCampaingnData();
    }
    
    renderAddCampaingn() {
        return (
          <form onSubmit={this.handleSave} >

          < div className="form-group row" >
              <label className=" control-label col-md-12" htmlFor="name">Name</label>
              <div className="col-md-4">
                  <input className="form-control" type="text" name="name" defaultValue={this.state.campaingn.name} required />
              </div>
          </div >

          <div className="form-group row">
              <label className="control-label col-md-12" htmlFor="age" >Age</label>
              <div className="col-md-4">
                  <input className="form-control" type="text" name="age" defaultValue={this.state.campaingn.age} required />
              </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-md-1" htmlFor="age" >Has 5g</label>
          <div className="form-check col-md-11">
            <input className="form-check-input" type="checkbox" name="has5g" defaultValue={this.state.campaingn.has5g} />
          </div>
          </div>
          <div className="form-group">
              <button type="submit" className="btn btn-default">Save</button>
              <button className="btn" onClick={this.handleCancel}>Cancel</button>
          </div >
      </form >
        );
      }

      render() {
        let contents =  this.renderAddCampaingn();
    
        return (
          <div>
            <h1 id="tabelLabel" >Campaingns Has 5G</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
          </div>
        );
      }

    async populateCampaingnData() {
        const response = await fetch('campaingns');
        const data = await response.json();
        this.setState({ campaingns: data, loading: false });
     }

   handleSave(event) {
      event.preventDefault();
      //let history = useHistory();
      const data = new FormData(event.target);

      fetch('/api/campaingns', {
        method: 'POST',
        body: JSON.stringify(
          {
            "name": data.get('name'),
            "age": data.get('age'),
            "has5g": data.get('has5g')==null?false:true
           }          
          ),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        }).then((response) => response.json())
          .catch((erro)=>{

          })
          .then((responseJson) => {
            //history.action('/AddSucessCampaingn');
            window.location='/AddSucessCampaingn';
            //<Redirect to='/AddSucessCampaingn'/>
            
      });
    }
  // This will handle Cancel button click event.
  handleCancel(e) {
    e.preventDefault();
  }
}