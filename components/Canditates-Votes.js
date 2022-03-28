import React, { Component } from "react";
import web3 from "../ethereum/web3";
import Election from "../ethereum/election";
import { Table } from "semantic-ui-react";

class CanditatesVoteRow extends Component {
  render() {
    const { Row, Cell } = Table;
    const { id, canditate } = this.props;

    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{canditate.name}</Cell>
        <Cell>{canditate.partyName}</Cell>
        <Cell>{canditate.votingCounts}</Cell>
      </Row>
    );
  }
}

export default CanditatesVoteRow;
