import React, {Component} from 'react';
import Aux from '../../../HOC/aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
 shouldComponentUpdate(nextProps, nextState) {
  return (
   nextProps.show !== this.props.show ||
   nextProps.children !== this.props.children
  );
 }
 render() {
  const {children, show, modalClosed} = this.props;
  return (
   <Aux>
    {' '}
    <Backdrop show={show} close={modalClosed} />
    <div
     className='Modal'
     style={{
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? '1' : '0',
     }}
    >
     {children}
    </div>
   </Aux>
  );
 }
}

export default Modal;
