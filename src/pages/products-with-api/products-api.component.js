import { render } from '@testing-library/react';
import React from 'react';
import connect from 'react-redux'


const ProductsWithApi = ({getProducts}) => {

    return (
        <button onClick={() => getProducts()}>Get Products from an API</button>
       
    )

}

const mapDispatchToProps = (dispatch) => ({

    getProducts : dispatch(getProductsFromAPI()) //action creator
 
});

export default connect(null,mapDispatchToProps)(ProductsWithApi);