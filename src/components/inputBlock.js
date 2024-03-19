import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const InputBlock = ({ subtitle, inputs }) => {
  return (
    <View>
      <SubTitle content={ subtitle } />
      <View style={styles.block}>
        {Object.entries(inputs).map(([key, input]) => (
          <Input
            key={key} 
            placeholder={input.placeholder} 
            icon={input.icon} 
            value={input.value}
            onChangeValue={input.onChangeValue}
          />
             ))}
      </View>
    </View>
  )
}

const Input = ({ placeholder, icon, value, onChangeValue }) => {
  return(
    <View style={styles.option}>
     <View style={styles.name}>
       <View style={styles.label}>
         <Feather name={ icon } color='white' size='20' />
         <SafeAreaView>
           <TextInput
             style={styles.input}
             onChangeText={ onChangeValue }
             value={ value }
             placeholder={ placeholder }
           />
         </SafeAreaView>
       </View>
       <View style={styles.icon}>
         <Feather name='chevrons-right' color='white' size='25' />
       </View>
     </View>
    </View>
  )
}

const SubTitle = ({ content }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#00111D',
    width: "full",
    height: "auto",
    borderRadius: 20,
    marginBottom: 15,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor:'white',
    borderWidth: 1
  },
  option: {
    flex: 1,
    minHeight: 50
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  label: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    paddingRight: 10
   },
  input: {
    height: 40,
    marginLeft: 18,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20
  },
  title: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: 350,
    height: 80,
    top: 50
  },
  titleText: {
    marginRight: 18,
    fontSize: 14,
    color: 'white'
  }
});

export default InputBlock;