import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Campaingn } from './components/Campaingn';
import { AddCampaingn } from './components/AddCampaingn';
import { AddSucessCampaingn } from './components/AddSucessCampaingn';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/home' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/campaingn' component={Campaingn} />
        <Route exact path='/' component={AddCampaingn} />
        <Route path='/AddSucessCampaingn' component={AddSucessCampaingn} />
      </Layout>
    );
  }
}
