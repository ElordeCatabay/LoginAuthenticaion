import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome } from "./screens";
import useAuth from '../hook/useAuth';

const Stack = createNativeStackNavigator();


export default function App() {
  const{user} = useAuth();
  if(user){
return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome}options={{headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
)
  }else{
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup'>
        <Stack.Screen name="Signup" component={Welcome}options={{headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  
}
}
