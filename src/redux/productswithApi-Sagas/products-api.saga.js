import {call, put, all, takeEvery } from "redux-saga/effects";
import ProductApiActionTypes from "./products-api.types";
import {getProductsSucceeded, getProductsFailed } from './products-api.actions'

function* watchGetProductsFromAPI(){
    yield takeEvery(ProductApiActionTypes.START_TO_GET_PRODUCTS_INFORMATION, 
        getProductsFromAPIAsync)
}

function* getProductsFromAPIAsync(){
    try{
        const data = yield call(() => {
            
            return fetch('https://fakestoreapi.com/products').
            then(res => res.json).
            then(put(getProductsSucceeded()))

        })
    }
    catch(error){
        put(getProductsFailed())
    }
}

export function* productApiSagas(){
    yield all([call(watchGetProductsFromAPI)])
}
