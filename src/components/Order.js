import React from 'react';
import Shipment from './Shipment';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];
    const isAvailable = burger && burger.status === 'available';
    if (!burger) return null;
    if (!isAvailable) {
      return (
        <CSSTransition classNames='order' key={key} timeout={{ enter: 500, exit: 500 }}>
          <li key={key} className='unavailable'>
            Извините,{burger ? burger.name : 'бургер'} временно недоступен
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition classNames='order' key={key} timeout={{ enter: 500, exit: 500 }}>
        <li key={key}>
          <span>
            <TransitionGroup component='span' className='count'>
              <CSSTransition classNames='count' key={count} timeout={{ enter: 500, exit: 500 }}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            шт. {burger.name}
            <span> {burger.price * count} ₽</span>
            <button className='cancelItem' onClick={() => this.props.deleteFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];
      const isAvailable = burger && burger.status === 'available';
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }
      return prevTotal;
    }, 0);
    return (
      <div className='order-wrap'>
        <h2>Ваш заказ</h2>
        <TransitionGroup component='ul' className='order'>
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        {total > 0 ? (
          <Shipment total={total} />
        ) : (
          <div className='nothingSelected'>Выберите блюдо и добавьте к заказу</div>
        )}
      </div>
    );
  }
}

export default Order;
