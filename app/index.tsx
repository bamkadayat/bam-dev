import { Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import LoginButton from "@/components/LoginButton";

import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-[#000000] h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full min-h-[85vh] justify-center items-center flex-1 px-4">
          <Image
            source={images.logo}
            className="w-[250px] h-[250px]"
            resizeMode="contain"
          />
          <Text className="text-4xl text-white font-bold text-center">
            Welcome
          </Text>
          <Text className="text-lg mt-2 text-white font-medium text-center leading-5 max-w-[300px]">
            We are excited to have you here. Dive in and explore this app.
          </Text>
          <CustomButton
            title="Sign Up"
            handlePress={() => {
              router.push("/sign-up");
            }}
            containerStyles="w-full mt-7"
          />

          <LoginButton
            title="Log In "
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#000000" />
    </SafeAreaView>
  );
}
