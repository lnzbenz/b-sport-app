import React, { Component } from 'react'
import Overview from '../components/Overview/Overview'
import Example from '../components/Example/Example'
import PrivateRoute from '../components/privateRoute'
import Order from '../components/Example/Order'
import Successs from '../components/Successs/successs'
import Admin from '../components/Admin/admin'
import AdminCreate from '../components/Admin/adminCreate'
import Favorite from '../components/Favorite/favorite'
import OrderCompleted from '../components/OrderCompleted/orderCompleted'
import Contact from '../components/Contact/contact'
class MainRoute extends Component {
    render() {
        return (
            <div style={{ position: 'relative', overflow: 'hidden' }}>
               <PrivateRoute exact path="/Overview" component={Overview} />
               <PrivateRoute exact path="/example" component={Example} />
               <PrivateRoute exact path="/order" component={Order} />
               <PrivateRoute exact path="/successs" component={Successs} />
               <PrivateRoute exact path="/admin" component={Admin} />
               <PrivateRoute exact path="/admin/create" component={AdminCreate} />
               <PrivateRoute exact path="/favorite" component={Favorite} />
               <PrivateRoute exact path="/orderCompleted" component={OrderCompleted} />
               <PrivateRoute exact path="/contact" component={Contact} />
            </div>
        )
    }
}
export default MainRoute