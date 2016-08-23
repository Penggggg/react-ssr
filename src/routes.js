import { Route } from 'react-router';
import React from 'react';
import IComponent from './client/container/I';
import AComponent from './client/container/A';

module.exports = (
    <Route path="/" component={ IComponent } >
        <Route path="/todo" component={ AComponent }>
        </Route>
    </Route>
)


// module.exports = (
//     <Route path="/" component={ IComponent } >
//         <Route path="/todo" getComponent={(location, callback)=>{
//                 require.ensure([], require => callback(null, require('./client/container/A').default))
//             }}  >
//         </Route>
//     </Route>
// )
