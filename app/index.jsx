import { Link } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../assets/img/logo_light.png'

export default function Home() {
  return (
    /**
     * You can think if the native View component as a div and
     * is mostly used as a wrapper that groups nested components,
     * and can help with content structure and layout
     * View component will often be used a root component
     */
    <View style={styles.container}>
      {/* We can either import the image as a module or set the uri */}
      <Image
        source={Logo}
        style={styles.img}
      />

      {/* The native Text component is used to output text */}
      <Text
        // We can also add a mix of inline and external styles
        style={[
          styles.title,
          {
            color: 'black',
          },
        ]}
      >
        The Number 1
      </Text>

      <Text
        style={{
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        Reading list app
      </Text>

      <Link
        href={'/about'}
        style={styles.link}
      >
        About Page
      </Link>
      <Link
        href={'/contact'}
        style={styles.link}
      >
        Contact Page
      </Link>
    </View>
  )
}

/**
 * Styles can be in its own variable or inline
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {
    marginVertical: 20, // Margin for top and bottom
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
})
