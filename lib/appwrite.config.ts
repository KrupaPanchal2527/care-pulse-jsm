import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT = 'https://cloud.appwrite.io/v1',
  PROJECT_ID = '66966a690028d108986f',
  API_KEY = '9f9342cc76ccf291e1a79bbcd944312b662709f6ada0ab336482475b9d54961d6c86d302ec63484ae199f5f065ee96bcd301286d5c0c4d3bff34fdbcede8bb36393de890b4c09c488a74ff9ec34578c718432ca5eeb517b5f941c2e5d9e725dd15722eeac861a9c28c2749ac44e783c1f043cb3a50c160ebfe2808072161e182',
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);