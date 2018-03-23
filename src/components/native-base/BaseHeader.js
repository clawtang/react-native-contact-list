import React, { Component } from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base';


class BaseHeader extends Component {
  render() {
    return (
      <Header style={{ height: 70 }}>
        <Left>
          <Button transparent onPress={this.props.onPress}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default BaseHeader;
