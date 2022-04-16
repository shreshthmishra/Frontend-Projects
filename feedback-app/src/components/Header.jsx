import React from "react";
import PropTypes from "prop-types";

function Header(Props){
  return (
    <header>
    <div className="container">
      <h2>{Props.text}</h2>
    </div>
    </header>
  )
}

Header.defaultProps={
  text:'Feedback UI'
}

Header.propTypes={
  text: PropTypes.string
}

export default Header