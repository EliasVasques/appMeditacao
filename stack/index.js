import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Temporizador from '../pages/temporizador';
import Inicial from '../pages/inicial';

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
      />
    </Stack.Navigator>
  );
}

export default Screens;