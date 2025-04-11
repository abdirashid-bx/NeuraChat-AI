import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Response } from '@/response/api';


const Input = ({onsend,onai}:any) => {
    
  const [text,setText]=useState("")
 
  const handeadd=async()=>{
    
    if(!text.trim())return
    onsend(text)
    onai(text)
    setText('')
  }
   
  return (
     
    <View className="absolute bottom-0 w-full flex-row items-center justify-center mb-6 px-4">
      <TextInput 
      onChangeText={setText}
      value={text}
        placeholder="Enter Your Question"
        placeholderTextColor="#B0B0B0"
        className="flex-1 h-12 px-4 bg-[#1E1E1E] text-white rounded-lg border border-[#444444]"
      />

      <TouchableOpacity className="ml-3 bg-[#4CAF50] p-3 rounded-full shadow-lg" onPress={handeadd}>
        <Image
          source={require('../assets/images/arrow.png')}
          style={{ width: 24, height: 24, tintColor: "#fff" }}
        />
      </TouchableOpacity>
    </View>
  );

};


export default Input;
