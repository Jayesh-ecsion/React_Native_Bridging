import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
  NativeModules
} from 'react-native';
const { VoiceChangingModule } = NativeModules;



const Bridge_comp = () => {
  const [inputdata, setInputData] = useState();
  const [data,setData] = useState("no Data")
  const sendData =()=>{
    console.log("inside send Data")
    Platform.OS === 'android' && VoiceChangingModule.changeVoiceToAlien(inputdata,(response)=>{
                   console.log(`Response from Android Native data is ${response}`)
                   setData(response)
                   setInputData("")
             })
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TextInput
        style={{margin: 10}}
        onChangeText={setInputData}
        value={inputdata}
        placeholder="ENTER Data"
        keyboardAppearance="default"
      />
      <TouchableOpacity
        onPress={() => {sendData()}}
        style={{
          backgroundColor: 'blue',
          alignSelf: 'stretch',
          alignItems: 'center',
          paddingVertical: 10,
          marginHorizontal: 20,
        }}>
        <Text>Send Data </Text>
      </TouchableOpacity>

      <Text style={{margin:10}}>{data}</Text>
    </View>
  );
};

export default Bridge_comp;
