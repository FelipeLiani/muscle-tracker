import React from 'react';
import { View, TouchableOpacity, ScrollView } from "react-native";
import { GlobalStyles } from "../../styles/global.styles";
import { Feather } from '@expo/vector-icons';
import Title from "../components/title";
import InputBlock from '../components/inputBlock';


export default function CustomCreation({ navigation }) {
  const [value, onChangeValue] = React.useState('');
 
  const Inputs = {
    input1: {
      placeholder: 'placeholder',
      icon: 'chevron-left',
      value: value,
      onChangeValue: onChangeValue
    }
  }

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
      <InputBlock inputs={Inputs} subtitle="subtitulo" />
    </ScrollView>
  </View>
  )
}