import { useState } from "react";
const apiKey ="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";
export const Response=async(userInput:any)=>{
 
  try {
    
    const response=await fetch("https://openrouter.ai/api/v1/chat/completions",{
      method:'POST',
      headers:{
        "Authorization":`Bearer ${apiKey}`,
        'Content-Type':'application/json'
      },body:JSON.stringify({
        "model": "openai/gpt-3.5-turbo",
        "messages":[{
          "role":"user",
          "content":userInput
        }]
      })
      
      
    })
    if (!response.ok) {
      throw 'error fetching for data'
    }
    const data= await response.json()
    const Airebly=data.choices[0].message.content
    
   
    return Airebly
    
     
    
  } catch (error) {
    console.log('error fetching',error)
    throw error
  }
}
