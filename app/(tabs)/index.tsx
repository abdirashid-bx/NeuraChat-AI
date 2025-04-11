import Input from "@/components/Input";
import { Response } from "@/response/api";
import { Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface Message {
  id: number;
  text: string;
  role: 'user' | 'assistant';
  dataload:boolean
 
}

export default function Index() {
  const [data, setData] = useState<Message[]>([]);
  const flatListRef = useRef<FlatList>(null);
  const [loading,setLoading]=useState(true)
  const idRef = useRef(0);
  const handleadd2 = (text: string) => {
    const newmsg: Message = {
      id:++idRef.current,
      text,
      role: 'user',
      dataload:false,
    };
    setData((data) => [...data, newmsg]);
  };
 
  const handleai = async (text: string) => {
    const id = Date.now().toString();
    const loadingId = ++idRef.current;
 
    const newmsg: Message = {
      id:loadingId,
      text: "Thinking...",
      role: 'assistant',
      dataload: true,
    };
  
    setData((prev) => [...prev, newmsg]);
  
    try {
      const response = await Response(text);
  
      setData((prevData) =>
        prevData.map((msg) =>
          msg.id === loadingId && msg.role === 'assistant'
            ? { ...msg, text: response, dataload: false }
            : msg
        )
      );
    } catch (error) {
      console.log('error happened', error);
    }
  };
  
  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [data]);
  

  return (
    <View className="bg-primary flex-1">
      <FlatList
      
        ref={flatListRef}
        data={data} 
         keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center flex mt-96 ">
            <Text className="text-white text-4xl">How can I help you today?</Text>
          </View>
        }

        renderItem={({ item }) => (
          <View className="flex w-full mb-8">
            
            {item.role === 'user'  && (
              <Text className="text-white bg-user p-4 rounded-xl self-end max-w-[90%] text-right mr-5 mt-4">
                {item.text}
              </Text>
            )}

          {item.dataload && (
  <Text className="text-white text-left right-0 ml-5 mb-12">
    Thinking...
  </Text>
)}
           
            {item.role === 'assistant' && !item.dataload && (
              <Text className="text-white text-left right-0 ml-5 mb-12">
                {item.text}
              </Text>
            )}
          </View>
        )}
      />

      <Input onsend={handleadd2} onai={handleai} />
    </View>
  );
}
