import { View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../styles/global.styles';
import { Feather } from '@expo/vector-icons';
import Title from '../components/title';

export default function GoPro({ navigation }) {
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
      <Title content="Torne-se Pro!" />
    </View>
  );
}
