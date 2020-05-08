import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import ProductPhone from './ProductPhone'
import ProductLaptop from './ProductLaptop'
import Footer from './Footer'

export default class Baitaplayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <ProductPhone/>
                <ProductLaptop/>
                <Footer/>
            </div>
        )
    }
}
