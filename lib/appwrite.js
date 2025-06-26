import { Account, Avatars, Client } from 'react-native-appwrite'
import { config } from '../config'

export const client = new Client()
  .setEndpoint(config.APPWRITE_ENDPOINT)
  .setProject(config.APPWRITE_ID)
  .setPlatform('net.miguel.shelfie')

export const account = new Account(client)
export const avatars = new Avatars(client)
