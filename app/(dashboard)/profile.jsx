import { StyleSheet, Text } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import { useUserContext } from '../../context/UserContext'

export default function Profile() {
  const { logout } = useUserContext()

  const handleLogout = () => logout()

  return (
    <ThemedView
      safe
      style={styles.container}
    >
      <Spacer height={10} />

      <ThemedText
        title
        style={styles.heading}
      >
        My Profile
      </ThemedText>

      <Spacer />

      <ThemedView
        style={{
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <ThemedText>Time to start reading some books...</ThemedText>

        <Spacer />

        <ThemedButton onPress={logout}>
          <Text
            style={{
              color: '#F2F2F2',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Logout
          </Text>
        </ThemedButton>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
})
