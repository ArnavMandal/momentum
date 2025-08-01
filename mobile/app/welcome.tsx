import { Link } from 'expo-router'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useVideoPlayer, VideoView } from 'expo-video'
import { MaterialIcons } from '@expo/vector-icons'

export default function WelcomePage() {
  const videoSource = require('../assets/videos/welcome_vid.mp4')

  const player = useVideoPlayer(videoSource, player => {
    player.loop = true
    player.play()
  })

  return (
    <View style={styles.container}>
      {/* Video background */}
      <VideoView player={player} style={styles.backgroundVideo} />

      {/* Black overlay */}
      <View style={styles.overlay} />

      {/* Foreground content */}
      <View style={styles.contentWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>M</Text>
        </View>

        <View style={styles.bottomSheet}>
          <View style={styles.buttonGroup}>
            <Link href="./(auth)/sign-in" asChild>
            <TouchableOpacity style={styles.emailButton}>
              <MaterialIcons name="email" size={24} color="white" style={{ marginRight: 10 }} />
              <Text style={styles.emailButtonText}>Sign In</Text>
            </TouchableOpacity>
            </Link>
          </View>

          <Text style={styles.signupText}>
            New?{' '}
            <Link href="./(auth)/sign-up" asChild>
              <Text style={styles.signupLink}>Sign Up</Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 96,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: -4,
  },
  bottomSheet: {
    backgroundColor: 'rgba(31, 41, 55, 0.8)', // Tailwind's gray-900 + opacity
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backdropFilter: 'blur(10px)', // optional: if using expo-blur
  },
  buttonGroup: {
    gap: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontWeight: '600',
    color: '#333',
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#374151', // Tailwind gray-700
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emailButtonText: {
    fontWeight: '600',
    color: 'white',
  },
  signupText: {
    textAlign: 'center',
    color: '#9CA3AF', // Tailwind gray-400
    marginTop: 24,
  },
  signupLink: {
    color: 'white',
    fontWeight: '600',
  },
})
