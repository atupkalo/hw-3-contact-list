import React from "react";

import "./Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', phone: '' };

    this.inputHandler = this.inputHandler.bind(this);
  }
  inputHandler = (e) =>{
    e.preventDefault();
    this.setState( {
        [e.target.name]: e.target.value
      });
  }
  clickHandler = (e) => {
    e.preventDefault();
    if(e.target.name === 'cancel'){
      this.props.passingFormData(false);
    }else{
      this.state.name && this.state.phone && this.props.passingFormData(this.state);
    }
  };

  render() {
    return (
      <div className="modal">
        <div className="form-wrap">
          <form className="" id="form" >
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Contact name"
              required
              onChange={this.inputHandler}
            />
            <input
              className="input"
              type="number"
              name="phone"
              placeholder="Phone number"
              required
              onChange={this.inputHandler}
            />
            <div className="btn-wrap">
              <input
                className="input-submit"
                name="cancel"
                type="submit"
                value="Cansel"
                onClick={this.clickHandler}
              />
              <input
                name="add"
                className="input-submit"
                type="submit"
                value="Add contact"
                onClick={this.clickHandler}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
