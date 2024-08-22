import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "@/store/store"; // Ensure the correct path
import { logout } from "@/store/authSlice"; // Ensure the correct path
import { router } from "expo-router";
import Constants from 'expo-constants';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout()); // Clear the user's data in the Redux store
    router.replace("/"); // Redirect to the welcome or login screen
  };

  const version = Constants.expoConfig?.version ?? '1.0.0';

  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 p-4">
          <Text className="text-3xl font-bold text-white mb-4">Profile</Text>

          {user && (
            <View className="bg-gray-800 p-4 rounded-lg mb-4">
              <Text className="text-xl font-semibold text-white">
                {user.name}
              </Text>
              <Text className="text-md text-gray-400">Fullname</Text>
            
            </View>
          )}

          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <Text className="text-xl font-semibold text-white">{user.email}</Text>
            <Text className="text-md text-gray-400"> Email</Text>
          </View>


          <TouchableOpacity
            className="bg-red-600 p-4 rounded-lg mt-4"
            onPress={handleLogout}
          >
            <Text className="text-xl font-semibold text-white text-center">Logout</Text>
          </TouchableOpacity>
          <Text className="text-md text-gray-400 mt-8 ml-2 text-left">App Version: {version}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
