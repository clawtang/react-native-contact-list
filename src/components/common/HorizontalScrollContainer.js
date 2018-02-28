import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

const HorizontalScrollContainer = (props) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled={props.pagingEnabled}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator}
      style={[styles.container, props.style]}
    >
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { HorizontalScrollContainer };
