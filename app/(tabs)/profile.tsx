import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, router } from "expo-router";

const Profile = () => {
  const handleLogout = () => {
    // Perform any necessary logout operations here, such as clearing user data

    // Redirect to the welcome screen
    router.replace("/");
  };

  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 p-4">
          <Text className="text-3xl font-bold text-white mb-4">Profile</Text>
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <Text className="text-xl font-semibold text-white">Welcome Back!</Text>
            <Text className="text-md text-gray-400">Here's a summary of your activity.</Text>
          </View>
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <Text className="text-xl font-semibold text-white">Recent Activity</Text>
            <Text className="text-md text-gray-400">No recent activity to show.</Text>
          </View>
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <Text className="text-xl font-semibold text-white">Your Stats</Text>
            <Text className="text-md text-gray-400">Here are your latest stats.</Text>
          </View>
          <TouchableOpacity
            className="bg-red-600 p-4 rounded-lg mt-4"
            onPress={handleLogout}
          >
            <Text className="text-xl font-semibold text-white text-center">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
