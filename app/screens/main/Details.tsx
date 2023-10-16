import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  return (
    <View style={styles.container}>
      <Text>Welcome to Details</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
