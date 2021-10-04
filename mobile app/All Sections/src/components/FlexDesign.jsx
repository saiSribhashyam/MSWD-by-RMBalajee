import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexItemA: {
    flexGrow: 0,
    backgroundColor: Platform.OS === 'android' ? 'yellow' : 'blue',
  },
  flexItemB: {
    flexGrow: 0,
    backgroundColor: 'blue',
  },
});

const FlexboxExample = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>
        <Text>Flex item A</Text>
      </View>
      <View style={styles.flexItemB}>
        <Text>Flex item B</Text>
      </View>
    </View>
  );
};

export default FlexboxExample;