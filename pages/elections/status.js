import React, { Component } from "react";
import Layout from "../../components/Layout";
import CanditatesVoteRow from "../../components/Canditates-Votes";
import Election from "../../ethereum/election";
import web3 from "../../ethereum/web3";
import { Table, Button } from "semantic-ui-react";
import { Link } from "../../routes";

class ElectionStatus extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const election = Election(address);
    const canditatesCount = await election.methods.getCanditatesCount().call();

    const canditates = await Promise.all(
      Array(parseInt(canditatesCount))
        .fill()
        .map((element, index) => {
          return election.methods.canditates(index).call();
        })
    );

    return { address, canditates, canditatesCount };
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

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <div>
          <h3>Election Status</h3>

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
              <Button primary>Finalize Election</Button>
            </a>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default ElectionStatus;
