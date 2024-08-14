import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";



const SignUp = () => {
  const [form, setform] = useState({
    username:"",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = async () => {
    if(!form.username || !form.email || !form.password){
      Alert.alert("Error", "All fields are required")
    }
    setIsSubmitting(true)
  }
  return (
    <SafeAreaView className="bg-[#000000] h-full">
      <ScrollView>
        <View className="w-full justify-center items-center">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[150px] h-[150px]"
          />
        </View>
        <View className="w-full justify-center h-full px-4 my-0">
          <Text className="text-2xl mt-0 font-psemibold text-white">
            Sign up
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => setform({ ...form, username: e })}
            otherStyles="mt-6 "
           
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setform({ ...form, email: e })}
            otherStyles="mt-6 "
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setform({ ...form, password: e })}
            otherStyles="mt-6"
          />

          <CustomButton title="Sign Up" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />
          <View className="justify-center pt-4 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
