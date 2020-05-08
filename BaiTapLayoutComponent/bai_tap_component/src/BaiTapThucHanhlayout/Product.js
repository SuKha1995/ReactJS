import React, { Component } from 'react'
import ProductItiem from './ProductItiem';

export default class Product extends Component {
    render() {
        return (
            <div className="container"> 
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <ProductItiem/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                    <ProductItiem/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                    <ProductItiem/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                    <ProductItiem/>
                    </div>
                </div>
            </div>



        )
    }
}

