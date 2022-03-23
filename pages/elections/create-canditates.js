import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import Election from "../../ethereum/election";

class CreateCanditates extends Component {
  state = {
    name: "",
    partyName: "",
    description: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createCanditate(
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
        <h3>Create Candidates</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Candidate Name</label>
            <Input
              labelPosition="right"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <label>Candidate Party Name</label>
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
            Create a Candidate
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CreateCanditates;
