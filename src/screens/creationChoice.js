import { View, TouchableOpacity, ScrollView } from "react-native";
import { GlobalStyles } from "../../styles/global.styles";
import { Feather } from '@expo/vector-icons';
import Title from '../components/title';
import OptionBlock from "../components/optionBlock";

export default function CreationChoice({ navigation }) {

  const CreationChoice = {
    option1: {
      label: "Criar ficha personalizada",
      icon: "sliders"
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
      </ScrollView>
    </View>
  )
}