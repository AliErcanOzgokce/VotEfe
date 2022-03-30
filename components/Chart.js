import React, { Component } from "react";
import Election from "../ethereum/election";
import web3 from "../ethereum/web3";
import { Header, Progress } from "semantic-ui-react";

class Chart extends Component {
  render() {
    const { canditate, votersCount } = this.props;

    return (
      <div>
        <Header>{canditate.name}</Header>
        <div>
          <Progress
            value={canditate.votingCounts}
            total={votersCount}
            progress="value"
            color="green"
          >{canditate.partyName}
          </Progress>
        </div>
      </div>
    );
  }
}

export default Chart;
