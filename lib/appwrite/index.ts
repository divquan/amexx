// appwrite.ts

import { Client, Databases, Account } from 'appwrite';
// Import type models for Appwrite
import { type Models } from 'appwrite';

const client: Client = new Client();

const PROJECT_ID = process.env.APPWRITE__PROJECT_ID__ || '';

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID); // Replace with your project ID

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

// You then use the imported type definitions like this
// const authUser: Models.Session = await account.createSession(email, password);
