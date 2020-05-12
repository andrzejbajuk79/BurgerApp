import React from 'react';
import BurgerIngr from './BurgerIngr';
import BurgerBulder from '../containers/BurgerBulder';
import {withRouter} from 'react-router-dom';

const Burger = (props) => {
 console.log(props);
 // console.log(Object.keys(props.ingredients));
 // console.log(props.ingredients);
 // console.log(props.ingredients['cheese']);
 let {ingredients} = props;
 // const keys = Object.keys(ingredients);
 // let val = Object.values(ingredients);
 // let entries = Object.entries(ingredients);
 // console.log(entries[2][1]);

 const skladniki = Object.keys(ingredients).map((typeIngr) => {
  return [...Array(props.ingredients[typeIngr])].map((_, index) => {
   return <BurgerIngr key={typeIngr + index} type={typeIngr} />;
  });
 });

 let flatArr = skladniki.reduce((arr, el) => {
  return arr.concat(el);
 }, []);

 if (flatArr.length === 0) {
  flatArr = <h2>Prosze dodac skladniki</h2>;
 }
 return (
  <div className='Burger'>
   <BurgerIngr type='bread-top' />
   {flatArr}
   <BurgerIngr type='bread-bottom' />
  </div>
 );
};
export default withRouter(Burger);
