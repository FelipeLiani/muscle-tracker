import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubTitle = ({ content }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: 350,
    height: 80,
    top: 50
  },
  titleText: {
    marginRight: 18,
    fontSize: 14,
    color: 'white'
  }
})

export default SubTitle;
