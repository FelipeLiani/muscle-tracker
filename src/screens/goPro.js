import { StyleSheet, Text, View } from 'react-native';

export default function GoPro() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Go Pro!</Text>
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
