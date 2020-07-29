import React from "react";
import NavBar from "../NavBar/index"

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="div">
            <NavBar />
            <img alt="curriculo" src={require('../../assets/icon.png')}></img>
        </div>
        <h1 className="h1">
          Se destaque com um curriculo criativo
        </h1>
        <div className="divCurriculo">
          <img alt="curriculo" src={require('../../assets/curriculo.png')}></img>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;