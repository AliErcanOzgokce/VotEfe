import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router, Link } from "../../routes";
import Election from "../../ethereum/election";

class CampaignNew extends Component {
  state = {
    name: "",
    count: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createElection(this.state.name, this.state.count)
        .send({
          from: accounts[0],
        });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, name: "", count: "" });
  };
  render() {
    return (
      <Layout>
        <h3>Create a Election</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Election Name</label>
            <Input
              labelPosition="right"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <label>Canditates Count</label>
            <Input
              labelPosition="right"
              value={this.state.count}
              onChange={(event) => this.setState({ count: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
