import React from 'react';
import { withRouter } from "react-router"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const Layout = (props) => {
  const children = props.children;

  return(
    <React.Fragment>
      <NavBar />
      <main className="App">
        { children }
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default withRouter(Layout);