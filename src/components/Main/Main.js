import React from "react";

import Table from "../Table/Table";
import Modal from "../Modal/Modal";
import Empty from "../Empty/Empty";

import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], modalShow: false };

    this.doClickHandler = this.doClickHandler.bind(this);
    this.receivedData = [];
  }

  // -------------------- Receiving data from form addint to state data
  doClickHandler = (formData) => {
    formData && this.receivedData.push(formData);

    this.setState({ data: this.receivedData });
    this.setState({ modalShow: false });
  };
  // -------------------- Open and close madal
  openModal = () => {
    this.setState({ modalShow: true });
  };
  // -------------------- Removing contact from the list
  removeContactHandler = (e) => {
    const id = Number(e.target.id);

    this.receivedData = this.receivedData.filter((el, i) => {
      return i !== id;
    });
    this.setState({ data: this.receivedData });
  };

  render() {
    return (
      <main className="main">
        {this.state.modalShow && (
          <Modal passingFormData={this.doClickHandler} />
        )}

        <div className="table-wrap">
          <table className="table">
            <caption className="table-title">Contact list</caption>
            {!this.state.data.length && <Empty />}
            {this.state.data.map((elem, i) => {
              return (
                <Table
                  id={i}
                  key={i}
                  name={elem.name}
                  phone={elem.phone}
                  removeContact={this.removeContactHandler}
                />
              );
            })}
          </table>
          <button className="add-btn" onClick={this.openModal}>
            add contact
          </button>
        </div>
      </main>
    );
  }
}

export default Main;
