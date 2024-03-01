import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../styles/global.styles';
import { Feather } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Feather name='settings' color='white' size='25' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather name='star' color='white' size='25' />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={GlobalStyles.title}>Olá Felipe!</Text>
        <View style={GlobalStyles.titleBar} />
      </View>
      <ScrollView style={styles.main}>
        <View style={styles.block} />
        <View style={styles.block} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(2, 4, 15)',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: 350,
    maxHeight: 65,
    top: 50,
    marginBottom: 10
  },
  title: {
    width: 350,
    height: 100,
    top: 50,
    marginBottom: 10
  },
  main: {
    width: 350,
    height: "auto",
    top: 50,
    marginBottom: 10
  },
  block: {
    backgroundColor: '#000910',
    width: "full",
    height: 250,
    borderRadius: 20,
    marginBottom: 15
  },
  text: {
    color: 'white'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000910',
    marginRight: 8,
    borderRadius: 100,
    maxWidth: 70,
    height: 70,
  }
});
