
import React, {useEffect, useState} from 'react';
import { Text, StatusBar, View, StyleSheet,
 Platform, TouchableOpacity, Image, 
 SafeAreaView} from 'react-native';
import { NativeModules } from 'react-native';
import Bridge_comp from './Components/BridgeComp';

const { VoiceChangingModule } = NativeModules;
const App =()=>{
  return(<SafeAreaView style={{flex:1}}>
    <Bridge_comp />
  </SafeAreaView>)
}
// const App = () => {
//   const changeToAlein = () => {
//     Platform.OS === 'android' && VoiceChangingModule.changeVoiceToAlien("From Native ",(response: any)=>{
//           console.log(`Response from Android Native ${response}`)
//     })
//   };
//   const saveToSharedPref =()=>{

//   }
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor={'#e4e5ea'} />
//       <Text style={styles.title}>Voice Changer</Text>
//       <Text style={styles.title}> Change Voice Effects </Text>
//       <View style={styles.iconsContainer}>
//         <TouchableOpacity onPress={() => changeToAlein()}>
//           <Image
//             source={{
//               uri:
//                 'https://icons.iconarchive.com/icons/google/noto-emoji-smileys/256/10101-alien-icon.png',
//             }}
//             resizeMode={'contain'}
//             style={styles.icon}
//           />
//           <Text>Alien</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => saveToSharedPref()}>
//           <Image
//             source={{
//               uri:
//                 'https://pics.freeicons.io/uploads/icons/png/2793494581535699799-512.png',
//             }}
//             resizeMode={'contain'}
//             style={styles.icon}
//           />
//           <Text>Child</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => null}>
//           <Image
//             source={{
//               uri:
//                 'https://www.pngjoy.com/pngl/346/6457386_black-arrows-fast-forward-symbol-transparent-png-download.png',
//             }}
//             resizeMode={'contain'}
//             style={styles.icon}
//           />
//           <Text>Fast</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => null}>
//           <Image
//             source={{
//               uri:
//                 'https://img.pngio.com/action-motion-play-slow-icon-slow-motion-png-512_512.png',
//             }}
//             resizeMode={'contain'}
//             style={styles.icon}
//           />
//           <Text>Slow</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#e4e5ea',
//     flex: 1,
//     paddingTop: 50,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     color: '#000',
//     marginVertical: 25,
//   },
//   iconsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     width: '100%',
//     paddingHorizontal: 50,
//   },
//   warningText: {
//     color: 'red',
//     fontWeight: 'bold',
//     letterSpacing: 1.5,
//     textAlign: 'center',
//   },
//   spacing: {
//     marginVertical: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '40%',
//   },
//   icon: {
//     height: 40,
//     width: 40,
//     marginBottom: 15,
//   },
// });

export default App;
