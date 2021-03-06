import React, {Component} from 'react';
import Aux from './aux';
import Toolbar from '../components/Navigation/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';

class Layout extends Component {
 state = {
  showSideDrawer: true,
 };

 sideDrawerClosedHandler = () => {
  this.setState({showSideDrawer: false});
 };

 sideDrawerToggleHandler = () => {
  this.setState((prevState) => {
   return {showSideDrawer: !prevState.showSideDrawer};
  });
 };
 render() {
  return (
   <Aux>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
    <SideDrawer
     open={this.state.showSideDrawer}
     closed={this.sideDrawerClosedHandler}
    />
    <main className='Content'>{this.props.children}</main>
   </Aux>
  );
 }
}

export default Layout;
