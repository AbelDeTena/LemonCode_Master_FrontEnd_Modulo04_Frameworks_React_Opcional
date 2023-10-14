import React from 'react'
import ReactDOM from 'react-dom/client'

import {MyContextProvider} from "./core/index";
import {MyComponent} from "./mycomponent"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <MyContextProvider>
    <h1> hola </h1>
    <MyComponent></MyComponent>
  </MyContextProvider>,
)
