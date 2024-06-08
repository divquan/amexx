import React, { useState } from "react";

import { account, databases } from "@/lib/appwrite";
import { ID, Models, Permission, Role } from "appwrite";
import { Loader2 } from "lucide-react";
import { ErrorObject, validateKeys } from "@/lib/utils";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignUpFormValues, USERDOCUMENT } from "./types";
import { COLLECTIONS } from "@/lib/appwrite/dbHelpers";

export const createAccount = async (
  uuid: string,
  userInput: SignUpFormValues
) => {
  try {
    await account.create(
      uuid,
      userInput.email,
      userInput.password,
      userInput.firstName + " " + userInput.lastName
    );
    return {
      type: "success",
      message: "User account created successfully",
    } as ErrorObject;
  } catch (error) {
    return {
      type: "error",
      message: "Could not create account",
    } as ErrorObject;
  }
};

export const addUserDataToDB = async (
  uuid: string,
  phoneNumber: string,
  createdAt: string
) => {
  try {
    const result = await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID || "", // databaseId
      COLLECTIONS.USERS, // collectionId
      ID.unique(), // documentId
      { phoneNumber, userId: uuid, createdAt }, // data
      [
        Permission.read(Role.any()), // Anyone can view this document
        Permission.write(Role.any()), // Anyone can view this document
        Permission.update(Role.any()), // Anyone can view this document
        // Permission.update(Role.team("consultants")), // Writers can update this document
        // Permission.update(Role.team("admin")), // Admins can update this document
        // Permission.delete(Role.user("uuid")), // User 5c1f88b42259e can delete this document
        // Permission.delete(Role.team("admin")), // Admins can delete this document
      ]
    );
    console.log("User added to database", result);
    return {
      type: "success",
      message: "User created successfully",
    } as ErrorObject;
  } catch (e) {
    console.error("Error adding user to database", e);
    return {
      type: "error",
      message: "Could not create account",
    } as ErrorObject;
  }
};

export const sendVerificationEmail = async (
  email: string,
  password: string
) => {
  try {
    //sending email verification
    await account.createVerification(
      process.env.NEXT_PUBLIC_HOST_NAME + "/verify"
    );
    return {
      type: "success",
      message: "Verification email sent successfully",
    } as ErrorObject;
  } catch (error) {
    return {
      type: "error",
      message: "Could not send verification email",
    } as ErrorObject;
  }
};

export const createSession = async (email: string, password: string) => {
  await account.deleteSessions();
  await account.createEmailPasswordSession(email, password);
};
