import React, { Component } from 'react';
import { AddSucessCampaingn } from './AddSucessCampaingn';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
          <Form onSubmit={this.handleSave} >

          <FormGroup row> 
              <Label for="name" sm={12}>Name</Label>
              <Col sm={4}>
           <Input type="text" name="name" id="name" placeholder="Name"  defaultValue={this.state.campaingn.name} required  />
          </Col>
          </FormGroup >


          <FormGroup row> 
              <Label for="age" sm={12}>Age</Label>
              <Col sm={4}>
           <Input type="text" name="age" id="age" placeholder="Age"  defaultValue={this.state.campaingn.age} required  />
          </Col>
          </FormGroup >

          <FormGroup check> 
              <Label for="has5g" sm={12}>
              <Input type="checkbox" name="has5g" id="has5g" placeholder="Has 5g"  defaultValue={this.state.campaingn.has5g} required  /> Has 5g        
              </Label>
          </FormGroup >

          {/* <div className="form-group row">
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
          </div> */}
          <Button color="primary" size="lg" type="submit">Submit</Button>{' '}
          <Button color="secondary" size="lg" onClick={this.handleCancel}>Cancel</Button>
      </Form >
        );
      }

      render() {
        let contents =  this.renderAddCampaingn();
    
        return (
          <div>
            <h1>MEO campaigns want you !!!</h1>
            <br/>
            <h1>We want to know if you have 5G?</h1>
            <br/>
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
      this.setState({ loading: true });

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
            this.setState({ campaingn: campaingn, loading: false });
        });
  }
  // This will handle Cancel button click event.
  handleCancel(e) {
    e.preventDefault();
    window.location='/home'
  }
}