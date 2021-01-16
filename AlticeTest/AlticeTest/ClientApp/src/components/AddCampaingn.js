import React, { Component } from 'react';
import { AddSucessCampaingn } from './AddSucessCampaingn';
export class AddCampaingn extends Component {
    static displayName = AddCampaingn.name;

    constructor(props) {
        super(props);
        this.state = { campaingn: {id:0,name:'',age:'',has5g:false}, loading: true };
        this.handleSave= this.handleSave.bind(this)
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
            <h1 id="tabelLabel" >MEO campaigns want you !!! we want to know if you have 5G?</h1>
            
            { this.state && this.state.campaingn.id==0 &&
             contents
            }

            { this.state && this.state.campaingn.id>0 &&
             <AddSucessCampaingn/> 
            }
            
          </div>
        );
      }

    async populateCampaingnData() {
        const response = await fetch('campaingns');
        const data = await response.json();
        this.setState({ campaingns: data, loading: false });
     }
   
    createCampaingnData() {
      this.setState({ campaingns: {}, loading: false });
   }
 
  handleSave(event) {
      event.preventDefault();
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
          .catch((erro)=>{})
          .then(campaingn=>{ 
            this.setState({ campaingn: campaingn, loading: true });
        });
  }
  // This will handle Cancel button click event.
  handleCancel(e) {
    e.preventDefault();
  }
}