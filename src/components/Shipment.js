import React from 'react';
import PropTypes from 'prop-types';

const Shipment = (props) => {
  const shipping = props.total > 0 && 500 > props.total ? 350 : 99;
  const shippingNeon =
    shipping === 99 ? (
      <span className='font-effect-neon total_wrap-cheap'>{shipping} ₽</span>
    ) : (
      <span>{shipping} ₽</span>
    );
  return (
    <div className='total'>
      <div className='total_wrap'>
        <div>
          <div>Доставка: {props.total > 0 ? shippingNeon : null}</div>
          <div className='total_wrap-free'>
            {props.total < 500
              ? `Закажите еще на ${500 - props.total} ₽ для доставки за 99 ₽`
              : null}
          </div>
        </div>
        <div className='total_wrap-final'>Итого: {props.total} ₽</div>
        <div className='total_wrap-final'> Итого c доставкой: {props.total + shipping} ₽</div>
      </div>
    </div>
  );
};

Shipment.propTypes = {
  total: PropTypes.number.isRequired
};

export default Shipment;
