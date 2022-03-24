import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import Election from "../../ethereum/election";

class CreateCanditates extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const election = Election(address);

    return { election, address };
  }
  state = {
    name: "",
    partyName: "",
    description: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const election = Election(this.props.address);
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      await election.methods
        .createCantitate(
          this.state.name,
          this.state.partyName,
          this.state.description
        )
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, name: "", partyName: "", description: "" });
  };

  render() {
    return (
      <Layout>
        <div>
          <h3>Create Canditates</h3>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <label>Canditate Name</label>
              <Input
                labelPosition="right"
                value={this.state.name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
                style={{ marginBottom: "15px" }}
              />
              <label>Canditate Party Name</label>
              <Input
                labelPosition="right"
                value={this.state.partyName}
                onChange={(event) =>
                  this.setState({ partyName: event.target.value })
                }
              />
            </Form.Field>
            <Form.TextArea
              label="Description"
              labelPosition="right"
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button loading={this.state.loading} primary>
              Create a Canditate
            </Button>
          </Form>
        </div>
      </Layout>
    );
  }
}

export default CreateCanditates;
