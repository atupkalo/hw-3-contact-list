import React from "react";

class Empty extends React.Component {
  render() {
    return (
      <tbody>
        <tr className="row">
          <th className="empty">
            Your list is empty, hit the "add contact" button to append a new
            contact
          </th>
        </tr>
      </tbody>
    );
  }
}

export default Empty;
