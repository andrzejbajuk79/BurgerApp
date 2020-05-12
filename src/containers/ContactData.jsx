import React, {Component} from 'react';
import Button from '../components/UI/Button/Buton';

class ContactData extends Component {
 state = {
  name: '',
  email: '',
  address: {
   street: '',
   postalCode: '',
  },
 };
 render() {
  return (
   <div>
    <h4>Enter your contact data</h4>
    <form>
     <input className='Input' type='text' name='name' placeholder='name' />
     <input className='Input' type='text' name='email' placeholder='email' />
     <input className='Input' type='text' name='street' placeholder='street' />
     <input
      className='Input'
      type='text'
      name='postal'
      placeholder='postal code'
     />
     <Button btnType='Success'>Order</Button>
    </form>
   </div>
  );
 }
}

export default ContactData;
