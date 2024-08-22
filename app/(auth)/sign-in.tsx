import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError } from "@/store/authSlice";
import { RootState, AppDispatch } from "@/store/store";

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, user } = useSelector((state: RootState) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Both email and password are required");
      return;
    }

    dispatch(loginUser(form));
  };

  useEffect(() => {
    if (user) {
      Alert.alert("Success", "Logged in successfully");
      router.push("/home");  // Navigate to home or dashboard
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
      dispatch(clearError());
    }
  }, [error]);

  return (
    <SafeAreaView className="bg-[#000000] h-full flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full justify-center items-center pt-10">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[150px] h-[150px]"
          />
        </View>
        <View className="w-full justify-center px-4 mt-10">
          <Text className="text-2xl font-psemibold text-white mb-6">
            Log in
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-6"
            keyboardType="email-address"
            placeholder="Enter your email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-6"
            placeholder="Enter your password"
            secureTextEntry // To make the password field secure
          />

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={loading}
          />
          <View className="justify-center pt-4 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
