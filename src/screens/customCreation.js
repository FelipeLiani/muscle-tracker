import { View, TouchableOpacity, ScrollView } from "react-native";
import { GlobalStyles } from "../../styles/global.styles";
import { Feather } from '@expo/vector-icons';
import Title from "../components/title";

export default function CustomCreation({ navigation }) {
  return (
    <View style={GlobalStyles.columnLayout}>
    <View style={GlobalStyles.headerLeft}>
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => {navigation.navigate("creation choice")}}
        >
          <Feather name='chevron-left' color='white' size='25' />
        </TouchableOpacity>
      </View>
    <Title content="Criar ficha P"/>
    <ScrollView style={GlobalStyles.main}>
   
    </ScrollView>
  </View>
  )
}