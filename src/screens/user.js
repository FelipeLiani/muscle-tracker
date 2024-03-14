import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../styles/global.styles';
import { Feather } from '@expo/vector-icons';
import UserBlock from '../components/userBlock';
import OptionBlock from '../components/optionBlock';


export default function User({ navigation }) {

  function navigateToGoPro() {
    navigation.navigate("go pro!")
  }

  const Options = {
    option1: {
      label: "Trocar tema",
      icon: "sliders",
      onPress: navigateToGoPro
    },
    option2: {
      label: "Torne-se Pro!",
      icon: "shield",
      onPress: navigateToGoPro
    },
    option3: {
      label: "Sair",
      icon: "log-out",
      onPress: navigateToGoPro
    },
  }

  return (
    <View style={GlobalStyles.columnLayout}>
      <View style={GlobalStyles.header}>
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => {navigation.navigate("settings")}}
        >
          <Feather name='plus' color='white' size='25' />
        </TouchableOpacity>
       </View>
       <UserBlock />
       <ScrollView style={styles.main}>
         <OptionBlock options={Options} subtitle="CONFIGURACOES" />
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    width: 350,
    maxHeight: "auto",
    top: 230,
    marginBottom: 10
  }
})
