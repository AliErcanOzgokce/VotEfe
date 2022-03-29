import React, { Component } from "react";
import { Button, Card, Group, Image } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Election from "../ethereum/election";

class CanditatesRow extends Component {
  onVote = async () => {
    const election = Election(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await election.methods.voteCanditate(this.props.id).send({
      from: accounts[0],
    });
  };

  render() {
    const { canditate } = this.props;

    return (
        <Card>
          <Card.Content extra>
            <Image
              floated="left"
              size="big"
              src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
            />
            <Card.Header>{canditate.name}</Card.Header>
            <Card.Meta>{canditate.partyName}</Card.Meta>
            <Card.Description>{canditate.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={this.onVote}>
                Vote
              </Button>
            </div>
          </Card.Content>
        </Card>
    );
  }
}

export default CanditatesRow;
