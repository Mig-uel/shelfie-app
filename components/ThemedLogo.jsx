import { Image, useColorScheme } from 'react-native'

// Logos
import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'

export default function ThemedLogo({ ...props }) {
  const colorScheme = useColorScheme()
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image
      source={logo}
      {...props}
    />
  )
}
