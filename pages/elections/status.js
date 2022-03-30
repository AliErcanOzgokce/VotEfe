import React, { Component } from "react";
import Layout from "../../components/Layout";
import CanditatesVoteRow from "../../components/Canditates-Votes";
import Election from "../../ethereum/election";
import web3 from "../../ethereum/web3";
import { Table, Button, Progress, Segment, Header } from "semantic-ui-react";
import { Link } from "../../routes";
import Chart from "../../components/Chart";

class ElectionStatus extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const election = Election(address);
    const canditatesCount = await election.methods.getCanditatesCount().call();
    const votersCount = await election.methods.votersCount().call();

    const canditates = await Promise.all(
      Array(parseInt(canditatesCount))
        .fill()
        .map((element, index) => {
          return election.methods.canditates(index).call();
        })
    );

    return { address, canditates, canditatesCount, votersCount };
  }

  renderRows() {
    return this.props.canditates.map((canditate, index) => {
      return (
        <CanditatesVoteRow
          key={index}
          id={index}
          address={this.props.address}
          canditate={canditate}
          name={canditate.name}
          partyName={canditate.partyName}
          votingCounts={canditate.votingCounts}
        />
      );
    });
  }

  renderChart() {
    return this.props.canditates.map((canditate, index) => {
      return (
        <Chart
          key={index}
          canditate={canditate}
          name={canditate.name}
          partyName={canditate.partyName}
          votingCounts={canditate.votingCounts}
          votersCount={this.props.votersCount}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <div>
          <h3>Election Status</h3>
          <Segment>{this.renderChart()}</Segment>
          <Table>
            <Header>
              <Row>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Party Name</HeaderCell>
                <HeaderCell>Vote Count</HeaderCell>
              </Row>
            </Header>
            <Body>{this.renderRows()}</Body>
          </Table>
          <Link route={`/elections/${this.props.address}/show-winner`}>
            <a>
              <Button icon="winner" primary content="Finalize Election" />
            </a>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default ElectionStatus;
