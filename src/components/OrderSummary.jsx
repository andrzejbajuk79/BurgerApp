import React, {Component} from 'react';
import Aux from '../HOC/aux';
import Backdrop from './UI/Backdrop/Backdrop';
import Button from './UI/Button/Buton';

class OrderSummary extends Component {
 componentDidUpdate() {}
 render() {
  const ingredientSummary = Object.keys(this.props.ingredients).map(
   (skladnik, index) => {
    return (
     <li key={index}>
      <span style={{textTransform: 'capitalize'}}>{skladnik} </span>:
      {this.props.ingredients[skladnik]}
     </li>
    );
   }
  );
  return (
   <Aux>
    <h3>Your order</h3>
    <p>pyszny burger z nastepujacymi skladnikami:</p>
    <ul>{ingredientSummary}</ul>
    <div>
     <p>
      {' '}
      <strong>Total Price :{this.props.price.toFixed(2)}</strong>:
     </p>
    </div>

    <p>Chcesz kontynuowac?</p>
    <Button btnType='Danger' clicked={this.props.purchasedCancelled}>
     Cancel
    </Button>
    <Button btnType='Success' clicked={this.props.purchgasedContinue}>
     Continue
    </Button>
   </Aux>
  );
 }
}

export default OrderSummary;
