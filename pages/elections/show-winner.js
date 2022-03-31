import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Header, Body, Container, Divider, Image } from "semantic-ui-react";
import Election from "../../ethereum/election";
import web3 from "../../ethereum/web3";

class WinnerShow extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const election = Election(address);
    const summary = await election.methods.getWinnerSummary().call();

    return {
      name: summary[0],
      partyName: summary[1],
      description: summary[2],
      totalVote: summary[3],
    };
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Winner</h3>
          <Container>
            <Image
              floated="left"
              size="small"
              src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
            />
            <Header style={{ marginTop: "10px" }}>{this.props.name}</Header>
            <Container textAlign="left">
              <b>{this.props.partyName}</b>
            </Container>
            <Divider />
            <p>{this.props.description}</p>
            <Container textAlign="right">
              Vote: {this.props.totalVote}
            </Container>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default WinnerShow;
