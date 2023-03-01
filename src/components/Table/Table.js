import React from "react";

import "./Table.css";

class Table extends React.Component {
  render() {
    return (
      <tbody>
        <tr className="row">
          <th className="cell">{this.props.name}</th>
          <th className="cell cell-phone">{this.props.phone}</th>
          <th
            className="cell cell-remove"
            onClick={this.props.removeContact}
            id={this.props.id}
          >
            remove
          </th>
        </tr>
      </tbody>
    );
  }
}

export default Table;
