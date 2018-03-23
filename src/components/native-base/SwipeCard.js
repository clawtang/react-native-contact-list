import React, { Component } from 'react';
import {
  // View,
  Text,
  Image,
  // StyleSheet,
} from 'react-native';
import {
  // Container,
  // Header,
  // View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  // Text,
  Left,
  Body,
  Icon
} from 'native-base';


const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../images/img1.jpeg')
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../images/img2.jpeg')
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('../images/img3.jpeg')
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: require('../images/img4.jpeg')
  },
];

class SwipeCard extends Component {
  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={item =>
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Thumbnail source={item.image} />
                <Body>
                  <Text>{item.text}</Text>
                  <Text note>NativeBase</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={{ height: 300, flex: 1 }} source={item.image} />
            </CardItem>
            <CardItem>
              <Icon name="heart" style={{ color: '#ED4A6A' }} />
              <Text>{item.name}</Text>
            </CardItem>
          </Card>
        }
      />
    );
  }
}

export default SwipeCard;
