import 'react-native-gesture-handler';
import { GlobalStyles } from '../../styles/global.styles';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Title from '../components/title';

export default function Home({ navigation }) {
  return (
    <View style={GlobalStyles.columnLayout}>
      <View style={GlobalStyles.header}>
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => {navigation.navigate("settings")}}
        >
          <Feather name='settings' color='white' size='25' />
        </TouchableOpacity>
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => {navigation.navigate("go pro!")}}
        >
          <Feather name='star' color='white' size='25' />
        </TouchableOpacity>
      </View>
      <Title content="Olá John!"/>
      <ScrollView style={GlobalStyles.main}>
      </ScrollView>
    </View>
  );
}
