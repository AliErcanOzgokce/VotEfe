import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { Link } from "../../routes";
import Election from "../../ethereum/election";

class ShowCanditates extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Candidates</h3>
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
        </div>
      </Layout>
    );
  }
}

export default ShowCanditates;
