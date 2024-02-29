import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>title</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>main</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(2, 4, 15)',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    width: 350,
    height: 50,
    top: 50,
    backgroundColor: 'red',
    marginBottom: 10
  },
  title: {
    width: 350,
    height: 100,
    top: 50,
    backgroundColor: 'blue',
    marginBottom: 10
  },
  main: {
    width: 350,
    height: "auto",
    top: 50,
    backgroundColor: 'green',
    marginBottom: 10
  },

  text: {
    color: 'white'
  }
});
