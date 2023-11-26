import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Notification from './src/screens/Notification';
import ScanScreen from './src/screens/ScanScreen';
import Time from './src/screens/Time';
import Cart from './src/screens/Cart';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeScreens(){
  return(
      <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarStyle: {height: 120, borderRadius: 40 }, headerShown: false}}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon: () => (<Image source={(require('./src/images/ImgBottom1.png'))} style={{tintColor: '#BBBBBB'}}/>)}}/>
        <Tab.Screen name="Notification" component={Notification} options={{tabBarIcon: () => (<Image source={(require('./src/images/ImgBottom2.png'))}/>)}}/>
        <Tab.Screen name="ScanScreen" component={ScanScreen} options={{tabBarIcon: () => (<Image source={(require('./src/images/ImgBottom3.png'))}/>)}}/>
        <Tab.Screen name="Time" component={Time} options={{tabBarIcon: () => (<Image source={(require('./src/images/ImgBottom4.png'))}/>)}}/>
        <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon: () => (<Image source={(require('./src/images/ImgBottom5.png'))}/>)}}/>
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    // <HomeScreen/>
    // <ScanScreen/>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Cart" screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreens} />
            <Stack.Screen name="ScanScreen" component={ScanScreen} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}