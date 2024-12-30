import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import { Feather } from '@expo/vector-icons'
import { Slot } from "expo-router";

export default function Layout() {

  //<Slot />

  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        drawerInactiveTintColor: '#727d9B',
        drawerActiveTintColor: '#fff',
        drawerHideStatusBarOnOpen: true,
        overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: '#1d1f25',
          paddingTop: 32,
          width: '50%'
        },
        // drawerLabelStyle: { marginLeft: -24 },
        sceneStyle: {
          backgroundColor: '#1d1f25',
        }
      }} >
        <Drawer.Screen
          name='index'
          options={{
            drawerIcon: ({ color, size }) => <Feather name="home" size={20} color={color} />,
            drawerLabel: 'Inicio',
          }} />


        <Drawer.Screen
          name='notificacoes'
          options={{
            drawerIcon: ({ color, size }) => <Feather name="bell" size={20} color={color} />,
            drawerLabel: 'Notificação',
          }} />


      </Drawer>
    </GestureHandlerRootView>
  )
}
