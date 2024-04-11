import { StatusBar } from 'expo-status-bar';
import { SectionList, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';

export default function App() {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  const renderItem1 = ({item}) => {
    return(
      <Text style={{fontSize: 22}}>- {item}</Text>
    )
  }
  return (
    <View style={appStyle.container}>
      <Text style={{fontSize: 25}}>Hola React Native</Text>
      <View style={{flex: 1}}>
        <SectionList
          contentContainerStyle={{flex: 1,alignItems: 'center', justifyContent: 'center'}}
          
          sections={DATA}
          renderItem={renderItem1}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontSize: 26, color: 'red'}}>{title}</Text>
          )}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </View>
  );
}