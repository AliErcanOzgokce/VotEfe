import React, { Component } from "react";
import { Button, Card, Group, Image } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { Link } from "../../routes";
import Election from "../../ethereum/election";
import CanditatesRow from "../../components/Canditates-List";
import web3 from "../../ethereum/web3";

class ShowCanditates extends Component {
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

  onRegister = async () => {
    const election = Election(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await election.methods.register().send({
      from: accounts[0],
    });
  };

  renderRows() {
    return this.props.canditates.map((canditate, index) => {
      return (
        <CanditatesRow
          key={index}
          id={index}
          address={this.props.address}
          canditate={canditate}
          name={canditate.name}
          description={canditate.description}
          partyName={canditate.partyName}
        />
      );
    });
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Canditates</h3>
          <Link route={`/elections/${this.props.address}/create-canditates`}>
            <a>
              <Button
                floated="right"
                content="Create Canditates"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          <Button
            style={{ marginBottom: "20px" }}
            content="Register"
            icon="edit"
            primary
            onClick={this.onRegister}
          />
          <Card.Group>{this.renderRows()}</Card.Group>
          <Link route={`/elections/${this.props.address}/view-status`}>
            <a>
              <Button
                style={{ marginTop: "20px" }}
                floated="left"
                icon="chart bar"
                content="View Status"
                primary
              />
            </a>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default ShowCanditates;
