import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = ({ content }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{content}</Text>
      <View style={styles.titleBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 350,
    height: 60,
    top: 50,
    marginBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white'
  },
  titleBar: {
    width: 150,
    height: 6,
    backgroundColor: '#E2012A',
    marginTop: 5,
    borderRadius: 20
  }
})

export default Title;
