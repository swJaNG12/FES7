import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {soldOut, sale} from '../modules/stockCounter'

export default function StockCounter() {


  const {message} = useSelector((state) => {
    return {
      message:state.stockReducer.message
    }
  });

  const { stock } = useSelector((state) => {
    return {
        stock: state.goodsReducer.stock
    }
  });

   const dispatch = useDispatch();

  //  이렇게 말고 dispatch(soldaOut()을 if에 넣어도 된다.)
   const onSoldout = () => dispatch(soldOut());

  useEffect(() => {
    if(stock <= 0) {
      onSoldout();
    } else {
      dispatch(sale());
    }
  }, [stock]);

  return (
    <p>{message}</p>
  )
}
