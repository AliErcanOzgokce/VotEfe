import React, { Component } from "react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Card, Button } from "semantic-ui-react";
import { Link } from "../routes";
import Election from "../ethereum/election";


class ElectionIndex extends Component {
  static async getInitialProps() {
    const elections = await factory.methods.getDeployedElections().call();
    const names = await factory.methods.getDeployedElectionNames().call();

    return { elections, names };
  }

  renderElections() {
    const items = this.props.elections.map((address, index) => {
      return {
        header: this.props.names[index],
        meta: address,
        description: (
          <div>
          <Link route={`/elections/${address}`}>
            <a>View Election</a>
          </Link>
          </div>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
      <div>
        <h3>Open Elections</h3>
        <Link route="/elections/new">
          <a>
            <Button
              floated="right"
              content="Create Election"
              icon="add circle"
              primary
            />
          </a>
        </Link>
        {this.renderElections()}
      </div>
      </Layout>
    );
  }
}

export default ElectionIndex;
