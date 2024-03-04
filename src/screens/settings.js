import { GlobalStyles } from '../../styles/global.styles';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Title from '../components/title';
import OptionBlock from '../components/optionBlock';

export default function Settings({ navigation }) {

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
      <View style={GlobalStyles.headerLeft}>
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => {navigation.navigate("menu")}}
        >
          <Feather name='chevron-left' color='white' size='25' />
        </TouchableOpacity>
      </View>
      <Title content="Configurações" />
      <ScrollView style={GlobalStyles.main}>
        <OptionBlock options={Options} subtitle="CONFIGURACOES" />
      </ScrollView>
    </View>
  );
}
