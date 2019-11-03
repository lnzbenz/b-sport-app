import React, { Component } from 'react'
import Overview from '../components/Overview/Overview'
import Example from '../components/Example/Example'
import PrivateRoute from '../components/privateRoute'
import Order from '../components/Example/Order'
import Successs from '../components/Successs/successs'
import Shoes from '../components/Successs/shoes'
import Admin from '../components/admin/admin'
import AdminCreate from '../components/admin/adminCreate'
class MainRoute extends Component {
    render() {
        return (
            <div style={{ position: 'relative', overflow: 'hidden' }}>
               <PrivateRoute exact path="/overview" component={Overview} />
               <PrivateRoute exact path="/example" component={Example} />
               <PrivateRoute exact path="/order" component={Order} />
               <PrivateRoute exact path="/successs" component={Successs} />
               <PrivateRoute exact path="/shoes" component={Shoes} />
               <PrivateRoute exact path="/admin" component={Admin} />
               <PrivateRoute exact path="/admin/create" component={AdminCreate} />
            </div>
        )
    }
}
export default MainRoute