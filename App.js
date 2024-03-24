import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductMenu from './screeens/ProductListScreen';
import ProductDetailsU from './screeens/ProductDetailsU';


const Stack = createNativeStackNavigator();

const App =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductMenu} options={{ title: 'Product List' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsU} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App