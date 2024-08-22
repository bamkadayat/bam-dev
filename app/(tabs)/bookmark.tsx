import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 p-4">
          <Text className="text-3xl font-bold text-white mb-4">Bookmark</Text>
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <Text className="text-xl font-semibold text-white">Bookmark</Text>
            <Text className="text-md text-gray-400">Here's a summary of your activity.</Text>
          </View>
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <Text className="text-xl font-semibold text-white">Bookmark Activity</Text>
            <Text className="text-md text-gray-400">No recent activity to show.</Text>
          </View>
     
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmark;
