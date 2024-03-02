import { GlobalStyles } from '../../styles/global.styles';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Title from '../components/title';
import SubTitle from '../components/subTitle';
import Option from '../components/option';

export default function Settings({ navigation }) {
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
        <SubTitle content="ASJDISDAJIODAJIOSD" />
        <View style={GlobalStyles.block}>
          <Option label="opcaoasdasdasdasd" icon="github" />
          <View style={GlobalStyles.optionBar}></View>
          <Option label="opcaoasdasdasdasd" icon="github" />
          <View style={GlobalStyles.optionBar}></View>
          <Option label="opcaoasdasdasdasd" icon="github" />
          <View style={GlobalStyles.optionBar}></View>
          <Option label="opcaoasdasdasdasd" icon="github" />
          <View style={GlobalStyles.optionBar}></View>
          <Option label="opcaoasdasdasdasd" icon="github" />
          <View style={GlobalStyles.optionBar}></View>
          <Option label="opcaoasdasdasdasd" icon="github" />
        </View>
      </ScrollView>
    </View>
  );
}
