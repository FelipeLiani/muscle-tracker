import { StyleSheet, Text, View } from 'react-native';

export default function Registers() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registers</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(2, 4, 15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
