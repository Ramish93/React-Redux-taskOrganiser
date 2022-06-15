import React from 'react';
 import { Provider } from 'react-redux'
 import {store} from '../store'

 export const Main = () => (
     //provider to make store available to all children componenets
     <Provider store= {store} />
 )