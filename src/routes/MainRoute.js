import React, { Component } from 'react'
import Overview from '../components/Overview/Overview'
import Example from '../components/Example/Example'
import PrivateRoute from '../components/privateRoute'
class MainRoute extends Component {
    render() {
        return (
            <div style={{ position: 'relative', overflow: 'hidden' }}>
               <PrivateRoute exact path="/overview" component={Overview} />
               <PrivateRoute exact path="/example" component={Example} />
               
            </div>
        )
    }
}
export default MainRoute