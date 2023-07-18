import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Pengaturan,
  InfoPdf,
  RumahSakit,
  Janji,
  WebInfo,
  Riwayat,
  Informasi,





} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Riwayat"
        component={Riwayat}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Informasi"
        component={Informasi}
        options={{
          headerShown: false,
        }}
      />





      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />





      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />










      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="WebInfo"
        component={WebInfo}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="InfoPdf"
        component={InfoPdf}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="RumahSakit"
        component={RumahSakit}
        options={{
          headerShown: false,
          headerTitle: 'Janji Temu',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000000',
        }}
      />

      <Stack.Screen
        name="Janji"
        component={Janji}
        options={{
          headerShown: false,
          headerTitle: 'Janji Temu',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000000',
        }}
      />



    </Stack.Navigator>
  );
}
