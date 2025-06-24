import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Redirect, Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function HomePage() {
  const { user } = useUser()

  return (
    <View>
      <SignedIn>
        {/* Dashboard content for authenticated users */}
        <Text>Welcome to your dashboard!</Text>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        {/* Your main app content here */}
      </SignedIn>
      <SignedOut>
        {/* Redirect to onboarding for unauthenticated users */}
        <Redirect href={'./welcome'} />
      </SignedOut>
    </View>
  )
}