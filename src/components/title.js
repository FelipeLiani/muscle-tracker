import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/global.styles";

const Title = ({ content }) => {
  return (
    <View style={styles.container}>
     <View style={GlobalStyles.title}>
       <Text style={GlobalStyles.title}>{content}</Text>
       <View style={GlobalStyles.titleBar} />
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 100,
    top: 50,
    marginBottom: 10
}
})

export default Title;
