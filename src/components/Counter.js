import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatImg } from '../redux/reducers/dataImgReducer';

export default function Counter() {

    const [cartData, setCartData] = useState(0);

    const { cart, count, imgUrl } = useSelector(state => ({
        ...state.addCartReducer,
        ...state.counterReducer,
        ...state.dataImgReducer
    }))

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type: 'INCR'
        })
    }

    const decrFunc = () => {
        dispatch({
            type: 'DECR'
        })
    }

    const addToCartFunc = () => {
        dispatch({
            type: 'ADDCART',
            payload: cartData
        })
    }

    useEffect(() => {
        dispatch(getCatImg())
    }, [])

    return (
        <div>
            <h1>Compteur : {count}</h1>
            <button onClick={decrFunc}>-1</button>
            <button onClick={incrFunc}>+1</button>
            <h1>Article dans le panier : {cart}</h1>
            <input
                value={cartData}
                onInput={e => setCartData(e.target.value)}
                type="number" />
            <br />
            <button onClick={addToCartFunc}>Ajouter au panier</button>
            {imgUrl && <img style={{width:"300px"}} src={imgUrl} alt="cat"/>}
        </div>
    )
}
