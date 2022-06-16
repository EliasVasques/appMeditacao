import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Temporizador from '../pages/Temporizador';
import Inicial from '../pages/Inicial';

const Stack = createNativeStackNavigator();

function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        component={ Inicial } 
        name='inicial'
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        component={ Temporizador } 
        name='temporizador'
        options={{ headerShown: true, title: "meditacao" }}
      />
    </Stack.Navigator>
  );
}

export default Screens;