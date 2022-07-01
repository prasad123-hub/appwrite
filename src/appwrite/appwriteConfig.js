import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost/v1") // Your Appwrite Endpoint
  .setProject("62bd7dcb6199bc50a3de"); // Your project ID //// Go to localhost:80 // Sign Up // Create-Project // under setting You will get projectID

export const account = new Account(client);

// Database

export const databases = new Databases(client, "62bdb5f98dfe001d92e7");
