import React, { Component } from 'react'
import Overview from '../component/Overview/Overview'

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