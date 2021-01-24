/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');

//import './components/Example'

import React  from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './components/Example'
import Buy from './components/Buy'
import OrderDetail from './components/OrderDetail'

function App() {
    const urlBase = '/evertec/public/home'
    return (
        <BrowserRouter>
            <Route path={urlBase} exact>
                <Main url={urlBase} user={user}></Main>
            </Route>
            <Route path={`${urlBase}/buy`} exact component={Buy}></Route>
            <Route path={`${urlBase}/detail/:id`} exact component={OrderDetail}></Route>
        </BrowserRouter>
    );
  }

  
  export default App;

  if (document.getElementById('example')) {
    //console.log("prueba")
    ReactDOM.render(<App/>, document.getElementById('example'));
}