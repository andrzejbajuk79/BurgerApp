import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './HOC/Layout';
import BurgerBuilder from './containers/BurgerBulder';
import './App.scss';
import Checkout from './containers/Checkout';

class App extends Component {
 render() {
  return (
   <>
    <Layout>
     <Switch>
      <Route path='/checkout' component={Checkout} />
      <Route path='/' exact component={BurgerBuilder} />
     </Switch>
    </Layout>
   </>
  );
 }
}

export default App;
