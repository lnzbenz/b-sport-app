import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <MainRoute /> */}
                <Footer />
            </div>
        )
    }
}
