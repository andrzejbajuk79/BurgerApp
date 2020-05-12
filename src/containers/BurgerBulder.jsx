import React, {Component} from 'react';
import axios from '../axios';
import Aux from '../HOC/aux';
import Burger from '../components/Burger';
import BuildControll from '../components/BuildControll';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/OrderSummary';
import Spinner from '../components/Spinner';
import withErrorHandler from '../HOC/withErrorHandler';
const INGR_PRICES = {
 salad: 0.4,
 cheese: 0.2,
 bacon: 0.7,
 meat: 0.9,
};
class BurgerBulder extends Component {
 state = {
  ingredients: null,
  totalPrice: 4.59,
  purchasable: false,
  purchasing: false,
  loading: false,
  error: false,
 };
 componentDidMount() {
  axios
   .get('https://react-my-burger-74f67.firebaseio.com/skladniki.json')
   .then((response) => {
    this.setState({ingredients: response.data});
   })
   .catch((error) => {
    this.setState({error: true});
   });
 }
 //ACCEPTING modal window
 purchaseHandler = () => {
  this.setState({purchasing: true});
 };

 //Cancelling modal window
 purchaseCancelHandler = () => {
  this.setState({purchasing: false});
 };

 //Axios request POST  po kliknieciu CONTINUR
 purchaseContinueHandler = () => {
  // this.setState({loading: true});
  // const order = {
  //  skladniki: this.state.ingredients,
  //  price: this.state.totalPrice,
  //  customer: {
  //   name: 'jan kowalski',
  //   address: {
  //    ulica: 'szpitalna',
  //    zipcode: '55-080',
  //    country: 'poland',
  //   },
  //   email: 'bbbb@sss.pl',
  //  },
  //  deliveryMethod: 'fast',
  // };
  // axios
  //  .post('/orders.json', order)
  //  .then((response) => {
  //   this.setState({loading: false, purchasing: false});
  //  })
  //  .catch((error) => {
  //   this.setState({loading: false, purchasing: false});
  //  });

  const queryParams = [];
  for (let i in this.state.ingredients) {
   queryParams.push(
    encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i])
   );
  }
  const queryString = queryParams.join('&');
  this.props.history.push({
   pathname: '/checkout',
   search: '?' + queryString,
  });
 };

 // AKTUALIZOWANIE  KOSZYKA ZAKUPÓW
 updatePurchaseState(ingredients) {
  const sum = Object.keys(ingredients)
   .map((skladnik) => {
    return ingredients[skladnik];
   })
   .reduce((sum, el) => {
    return sum + el;
   }, 0);
  this.setState({purchasable: sum > 0}); //true albo false
 }

 //CDODAWANIE SKLADNIKOW
 AddIngredientHandler = (type) => {
  const oldCount = this.state.ingredients[type];
  const updateCount = oldCount + 1;
  const updIngredients = {...this.state.ingredients};

  updIngredients[type] = updateCount;
  const priceAddition = INGR_PRICES[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice + priceAddition;
  this.setState({
   totalPrice: newPrice,
   ingredients: updIngredients,
  });
  this.updatePurchaseState(updIngredients);
 };

 //uSUWANIE SKLADNIKOW
 RemoveIngredientHandler = (type) => {
  const oldCount = this.state.ingredients[type];
  if (oldCount <= 0) {
   return;
  }
  const updateCount = oldCount - 1;
  const updIngredients = {...this.state.ingredients};

  updIngredients[type] = updateCount;
  const priceAddition = INGR_PRICES[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice - priceAddition;
  this.setState({
   totalPrice: newPrice,
   ingredients: updIngredients,
  });
  this.updatePurchaseState(updIngredients);
 };

 render() {
  const disabledInfo = {
   ...this.state.ingredients,
  };
  for (let key in disabledInfo) {
   disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let burger = this.state.error ? (
   <p>Ingredients can't be loaded!</p>
  ) : (
   <Spinner />
  );

  if (this.state.ingredients) {
   burger = (
    <Aux>
     <Burger ingredients={this.state.ingredients} />
     <BuildControll
      add={this.AddIngredientHandler}
      remove={this.RemoveIngredientHandler}
      disabled={disabledInfo}
      price={this.state.totalPrice}
      purchasable={!this.state.purchasable}
      ordered={this.purchaseHandler}
     />
     />
    </Aux>
   );
   orderSummary = (
    <OrderSummary
     price={this.state.totalPrice}
     purchgasedContinue={this.purchaseContinueHandler}
     purchasedCancelled={this.purchaseCancelHandler}
     ingredients={this.state.ingredients}
    />
   );
  }

  if (this.state.loading) {
   orderSummary = <Spinner />;
  }

  return (
   <Aux>
    <Modal
     show={this.state.purchasing}
     modalClosed={this.purchaseCancelHandler}
    >
     {orderSummary}
    </Modal>
    {burger}
   </Aux>
  );
 }
}

export default withErrorHandler(BurgerBulder, axios);
