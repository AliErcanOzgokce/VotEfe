import React, { Component } from "react";
import Layout from "../../components/Layout";
import CanditatesVoteRow from "../../components/Canditates-Votes";
import Election from "../../ethereum/election";
import web3 from "../../ethereum/web3";
import {
  Table,
  Button,
  Progress,
  Segment,
  Header,
  Message,
  Form,
} from "semantic-ui-react";
import { Router, Link } from "../../routes";
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

    const complete = await election.methods.electionCompleted().call();

    return { address, canditates, canditatesCount, votersCount, complete };
  }

  state = {
    errorMessage: "",
    loading: false,
  };

  onPickWinner = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const election = Election(this.props.address);
      const accounts = await web3.eth.getAccounts();

      await election.methods.pickWinner().send({
        from: accounts[0],
      });
      Router.pushRoute(`/elections/${this.props.address}/show-winner`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

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
    const { complete } = this.props;

    return (
      <Layout>
        <div>
          <h3>Election Status</h3>
          <Segment>
            {this.renderChart()}
          </Segment>
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
          <Form onSubmit={this.onPickWinner} error={!!this.state.errorMessage}>
            <Message error header="Oops!" content={this.state.errorMessage} />
            {complete ? null :
            <Button
              loading={this.state.loading}
              icon="winner"
              primary
              content="Finalize Election"
            />
            }
            {!complete ? null : <Link route={`/elections/${this.props.address}/show-winner`}>
              <Button icon="chess king" content="Show Winner"/>
            </Link>}
          </Form>
        </div>
      </Layout>
    );
  }
}

export default ElectionStatus;
