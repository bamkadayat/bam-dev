import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "@/store/authSlice";
import { RootState, AppDispatch } from "@/store/store";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    dispatch(registerUser(form)).then((result) => {
      if (registerUser.fulfilled.match(result)) {
        Alert.alert("Success", "Account created successfully. Please sign in.");
        router.push("/sign-in");
      }
    });
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
      dispatch(clearError());
    }
  }, [error]);

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
            title="Fullname"
            value={form.name}
            handleChangeText={(e: any) => setForm({ ...form, name: e })}
            otherStyles="mt-6 "
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-6"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-6"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={loading}
          />
          <View className="justify-center pt-4 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
