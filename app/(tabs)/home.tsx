import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store"; // Ensure the correct path

const Home = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 p-4">
          <Text className="text-3xl font-bold text-white mb-4">Home</Text>
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <Text className="text-xl font-semibold text-white">
              Welcome {user.name} !
            </Text>
          </View>
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <Text className="text-xl font-semibold text-white">
              Recent Activity
            </Text>
            <Text className="text-md text-gray-400">
              No recent activity to show.
            </Text>
          </View>
          <View className="bg-gray-800 p-4 rounded-lg">
            <Text className="text-xl font-semibold text-white">Your Stats</Text>
            <Text className="text-md text-gray-400">Updated from github.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
