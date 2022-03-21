import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Header as="h1" style={{ marginTop: "20px" }}>
      <Icon name="fire" />
      <Header.Content>
        <Link route="/">
          <a className="item" >VotEfe</a>
        </Link>
      </Header.Content>
    </Header>
  );
};
