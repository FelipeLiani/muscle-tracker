import { StyleSheet, Text, View } from 'react-native';

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(2, 4, 15)',
    minHeight: 'full',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
