import React, { Component } from 'react'
import Overview from '../components/Overview/Overview'
import PrivateRoute from '../components/privateRoute'
class MainRoute extends Component {
    render() {
        return (
            <div style={{ position: 'relative', overflow: 'hidden' }}>
               <PrivateRoute exact path="/overview" component={Overview} />
            </div>
        )
    }
}
export default MainRoute