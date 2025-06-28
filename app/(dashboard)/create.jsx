import { useRouter } from 'expo-router'
import { useState } from 'react'
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedView from '../../components/ThemedView'
import { useBooksContext } from '../../context/BooksContext'

export default function Create() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const { createBook } = useBooksContext()

  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim()) return

    setIsLoading(true)

    try {
      await createBook({ title, author, description })

      // reset fields
      setTitle('')
      setAuthor('')
      setDescription('')

      // redirect user
      return router.replace('/books')
    } catch (error) {
      console.log(error)
    } finally {
      // reset loading
      setIsLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView
        safe
        style={styles.container}
      >
        <Spacer height={10} />
        <ThemedText
          title
          style={styles.heading}
        >
          Add a New Book
        </ThemedText>

        <Spacer />

        <ThemedView style={{ justifyContent: 'center', flex: 1 }}>
          <ThemedTextInput
            style={styles.input}
            placeholder='Book Title'
            value={title}
            onChangeText={setTitle}
          />

          <Spacer height={10} />

          <ThemedTextInput
            style={styles.input}
            placeholder='Author'
            value={author}
            onChangeText={setAuthor}
          />

          <Spacer height={10} />

          <ThemedTextInput
            style={styles.multiline}
            placeholder='Book Description'
            value={description}
            onChangeText={setDescription}
            multiline={true}
          />

          <Spacer height={10} />

          <ThemedButton
            onPress={handleSubmit}
            disabled={isLoading}
            style={styles.button}
          >
            <Text style={{ color: '#FFF', textAlign: 'center' }}>
              {isLoading ? 'Adding...' : 'Add Book'}
            </Text>
          </ThemedButton>
        </ThemedView>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  button: {
    alignSelf: 'center',
  },
})
