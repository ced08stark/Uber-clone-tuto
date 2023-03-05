import { TailwindProvider } from "tailwindcss-react-native";
import { Provider } from "react-redux";
import { store } from './store';
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import "react-native-gesture-handler";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Provider store={store}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            
          </Stack.Navigator>
        </Provider>
      </TailwindProvider>
    </NavigationContainer>
  );
}


