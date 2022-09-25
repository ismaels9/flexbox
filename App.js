import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.pai}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        hidden={false} />
      <View style={styles.esquerda}>
        <View style={styles.color1}></View>
        <View style={styles.color2}></View>
        <View style={styles.color3}></View>

      </View>

      <View style={styles.direita}>
        <View style={styles.color4}></View>
        <View style={styles.color5}><Text style={styles.Text}> FLEXBOX </Text></View>
        <View style={styles.color6}></View>
      </View>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  pai: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#423F3D',
    paddingTop: 38,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },

  esquerda: {
    backgroundColor: '#423F3D',
    width: '50%',
    marginRight: 5,

  },
  direita: {
    backgroundColor: '#423F3D',
    width: '50%',
  },
  color1: {
    flex: 0.25,
    backgroundColor: '#8F6CE6',
    width: '100%',
    marginBottom: 5,
  },
  color2: {
    flex: 0.25,
    backgroundColor: '#38B6FF',
    width: '100%',
    marginBottom: 5,
  },
  color3: {
    flex: 0.5,
    backgroundColor: '#5271FF',
    width: '100%',
  },
  color4: {
    flex: 0.25,
    width: '100%',
    marginBottom: 5,
    backgroundColor: '#92C8FF',
  },
  color5: {
    flex: 0.5,
    width: '100%',
    marginBottom: 5,
    backgroundColor: '#38B6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color6: {
    flex: 0.25,
    width: '100%',
    backgroundColor: '#612BC6',
  },
  Text: {
    transform: [{ rotate: '270deg' }],
    fontSize: 32,
    fontFamily: 'Roboto_700Bold',
    letterSpacing: 5,
  }
});
