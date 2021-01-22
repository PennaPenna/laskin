import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';



export default function App() {

  const [texta, setTexta] = useState('');
    const [textb, setTextb] = useState('');
  const [result, setResult] = useState('');
  //const onChangeText={text=> setText(text)};
  const buttonPressedSum= () => {setResult(texta- -textb);}
  const buttonPressedSub= () => {setResult(texta - textb);}

  return (
    <View style={styles.container}>
     <Text style={{marginBottom:10}}>Result: {result}</Text>

      <TextInput id="a"
        keyboardType="number-pad"
        style ={{width:150 , borderColor:'#333', borderWidth:1, marginBottom:-1}}
        onChangeText={texta =>  setTexta(texta)}
        value={texta}
        />

  <TextInput id="b"
        keyboardType="number-pad"
        style ={{width:150 , borderColor:'#333', borderWidth:1, marginBottom:10}}
        onChangeText={textb =>  setTextb(textb)}
        value={textb}
              />

    <View style={styles.row}>
        <Button onPress= {buttonPressedSum}title="+"/>
        <Button onPress= {buttonPressedSub}title="-"/>
      </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:60,
  },

});

//props keyboardType numeric
