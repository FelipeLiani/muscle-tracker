import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

const OptionBlock = ({ subtitle, options }) => {
  return (
    <View>
      <SubTitle content={ subtitle } />
      <View style={styles.block}>
        {Object.entries(options).map(([key, option]) => (
          <Option key={key} label={option.label} icon={option.icon} onPress={option.onPress}/>
             ))}
      </View>
    </View>
  )
}

const Option = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={ onPress }>
     <View style={styles.name}>
       <View style={styles.label}>
         <Feather name={ icon } color='white' size='20' />
         <Text style={styles.text}>{ label }</Text>
       </View>
       <View style={styles.icon}>
         <Feather name='chevrons-right' color='white' size='25' />
       </View>
     </View>
    </TouchableOpacity>
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
    borderWidth: 1,
  },
  option: {
    flex: 1,
    minHeight: 50,
    //backgroundColor:'green'
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    paddingLeft: 10,
  },
  label: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  },
  icon: {
   paddingRight: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginLeft: 18
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
})

export default OptionBlock;
