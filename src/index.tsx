import React from "react"
import ReactDOM from "react-dom"
import { Index } from "src/components/pages/index"
import { GlobalStyles } from "src/components/styles/GlobalStyles"

import { unregister } from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <Index />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
