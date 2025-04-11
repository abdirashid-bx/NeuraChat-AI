import { Stack } from "expo-router";
import '../global.css'
import { Drawer } from 'expo-router/drawer';
import { Image } from "react-native";
 

export default function RootLayout() {
  return (
    <Drawer
    
    screenOptions={{
      drawerActiveBackgroundColor:"#B0B0B0",
     drawerActiveTintColor:"#FFFFFF",
     drawerInactiveTintColor:"#fff",
     drawerContentStyle: {
      backgroundColor: "#121212", 
      height:30
      
      
    },
    drawerLabelStyle:{
      fontSize:17,
    
    }

    }}
    >
      <Drawer.Screen
      name="index"
      
      
     options={{
      title:"NeuraChat",
      headerTintColor:"#fff",
      headerStyle:{
        backgroundColor:'#030014',
        borderBottomWidth: 0,  
        elevation: 0,  
        shadowOpacity: 0, 
      
      },
      headerTitle:'NeuraChat'
   
     
     }}
      />
       <Drawer.Screen
      name="aboutd"
      
     options={{
      title:"aboutdeveloper",
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:'#030014',
        borderBottomWidth:0,
        elevation:0,
        shadowOpacity:0,

      }
     
     }}
      />
    </Drawer>
  )
 
  ;
}
