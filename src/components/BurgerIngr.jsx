import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BurgerIngr extends Component {
 render() {
  let ingredient = null;
  switch (this.props.type) {
   case 'bread-bottom':
    return (ingredient = <div className='BreadBottom'></div>);
   case 'bread-top':
    return (ingredient = (
     <div className='BreadTop'>
      <div className='Seeds1'></div>
      <div className='Seeds2'></div>
     </div>
    ));
   case 'meat':
    return (ingredient = <div className='Meat'></div>);
   case 'bacon':
    return (ingredient = <div className='Bacon'></div>);
   case 'cheese':
    return (ingredient = <div className='Cheese'></div>);
   case 'salad':
    return (ingredient = <div className='Salad'></div>);

   default:
    return (ingredient = null);
  }
  return ingredient;
 }
}

BurgerIngr.proppTypes = {
 type: PropTypes.string.isRequired,
};
export default BurgerIngr;
