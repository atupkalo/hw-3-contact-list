import React from "react";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1 className="title">{this.props.headerTitle}</h1>
        </div>
      </header>
    );
  }
}

export default Header;
