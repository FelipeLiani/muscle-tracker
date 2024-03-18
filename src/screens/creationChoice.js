import { View, TouchableOpacity, ScrollView, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/global.styles";
import { Feather } from '@expo/vector-icons';
import Title from '../components/title';
import OptionBlock from "../components/optionBlock";

export default function CreationChoice({ navigation }) {

  function NavigateToCustomCreation() {
    navigation.navigate('custom creation')
  }

  const CreationChoice = {
    option1: {
      label: "Criar ficha personalizada",
      icon: "sliders",
      onPress: NavigateToCustomCreation
    },
    option2: {
      label: "Criar ficha automática",
      icon: "play"
    },
  }

  return (
    <View style={GlobalStyles.columnLayout}>
      <View style={GlobalStyles.headerLeft}>
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => {navigation.navigate("menu")}}
        >
          <Feather name='chevron-left' color='white' size='25' />
        </TouchableOpacity>
      </View>
      <Title content="Nova ficha" />
      <ScrollView style={GlobalStyles.main}>
        <OptionBlock options={CreationChoice} subtitle='MÉTODO DE CRIAÇÃO'/>
        <View>
          <View style={styles.paragraph}>
            <Text style={styles.title}>FICHA PERSONALIZADA{'\n'}</Text>
            <Text style={styles.text}>
              CRIE SUA PRÓPRIA FICHA DE TREINO.
              {'\n'}
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.title}>FICHA AUTOMÁTICA{'\n'}</Text>
            <Text style={styles.text}>
              DEIXE QUE O ALGOTÍTIMO CRIE UMA FICHA DE TREINO COM BASE NOS 
              AGRUPAMENTOS MUSCULARES, NÚMERO DE SÉRIES E EQUIPAMENTOS DISPONÍVEIS.
              {'\n'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: -14,
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  paragraph: {
    marginTop: 22
  }
})