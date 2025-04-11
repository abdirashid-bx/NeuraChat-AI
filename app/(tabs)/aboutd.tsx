import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const aboutd = () => {
  return (
    <ScrollView  className='bg-primary flex-1 '> 
    
      <View className='flex justify-center items-center mt-5'> 
     <Image 
  source={require('../../assets/images/aboutdev.jpg')} 
  style={{
    width:100,
    height:100,
    borderRadius:50
  }}
/>
<Text className='text-white text-base md:text-lg p-5'>
Hi there! I'm Abdirashiid, a passionate developer focused on creating innovative solutions using modern web and mobile technologies. With a strong background in JavaScript, React, React Native, Tailwind CSS, and various other front-end technologies, I aim to build meaningful, user-friendly applications that enhance user experiences.

In this project, NeuraChat, I combined my skills to create an AI-powered chat experience that mimics real-time conversations, providing users with a seamless interface and instant responses. I used Tailwind CSS for styling, which allowed me to quickly build a responsive and visually appealing layout. I developed this from scratch with the goal of pushing the boundaries of AI-powered communication and enhancing user interaction.

Feel free to explore the code, give feedback, or contribute to this project on GitHub. I'm always open to new ideas and collaborations!
</Text>


</View>
   
    </ScrollView>
  )
}

export default aboutd