import { Account, Avatars, Client, Databases } from 'react-native-appwrite'
import { config } from '../config'

export const client = new Client()
  .setEndpoint(config.APPWRITE_ENDPOINT)
  .setProject(config.APPWRITE_ID)
  .setPlatform('net.miguel.shelfie')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const database = new Databases(client)
