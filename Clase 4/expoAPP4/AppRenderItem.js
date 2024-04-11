import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';

export default function App() {
  const DATA = ["Pizza", "Hamburguesa", "Papas fritas"]
  function renderItem({item}){
    return(
      <Text style={{fontSize: 24}}>{item}Prueba</Text>
    )
  }
  const renderItem1 = ({item}) => {
    return(
      <Text style={{fontSize: 24}}>{item}Prueba</Text>
    )
  }
  return (
    <View style={appStyle.container}>
      <Text style={{fontSize: 25}}>Hola React Native</Text>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{flex: 1,alignItems: 'center', justifyContent: 'center'}}
          data={DATA}
          renderItem={renderItem1}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}