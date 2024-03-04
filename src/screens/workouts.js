import { View, ScrollView, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../styles/global.styles';
import { Feather } from '@expo/vector-icons';
import Title from '../components/title';

export default function Workouts({ navigation }) {
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
      <Title content="Fichas de treino"/>
      <ScrollView style={GlobalStyles.main}>
      </ScrollView>
    </View>
  );
}
