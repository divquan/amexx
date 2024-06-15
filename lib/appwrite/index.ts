// appwrite.ts

import { Client, Databases, Account } from "appwrite";
// Import type models for Appwrite

const client: Client = new Client();

const PROJECT_ID = process.env.APPWRITE__PROJECT_ID__ || "";

client
  .setEndpoint(
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "http://localhost/v1"
  )
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || ""); // Replace with your project ID

export const account: Account = new Account(client);
export const databases: Databases = new Databases(client);

// You then use the imported type definitions like this
// const authUser: Models.Session = await account.createSession(email, password);
