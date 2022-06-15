import React from 'react';
 import { Provider } from 'react-redux'
 import {store} from '../store'
 import {ConnectedDashboard} from './Dashboard'

 export const Main = () => (
     //provider to make store available to all children componenets
     <Provider store= {store}>
        <ConnectedDashboard />
    </Provider>

 )