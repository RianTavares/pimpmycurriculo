import React from 'react';
import { withRouter } from "react-router"

import Header from "./components/Header"
import Footer from "./components/Footer"


const Layout = (props) => {
  const children = props.children;

  return(
    <React.Fragment>
      <Header />
      <main className="App">
        { children }
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default withRouter(Layout);