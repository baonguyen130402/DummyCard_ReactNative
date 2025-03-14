import { icon } from "@/constants/icon";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import Animated from "react-native-reanimated";

type TabBarButtonProps = {
  routeName: string,
  onPress: () => void,
  onLongPress: () => void,
  isFocused: boolean,
  color: string,
  label: string
}

export default function TabBarButton(props: TabBarButtonProps) {
  const { routeName, onPress, onLongPress, isFocused, color, label } = props

  const scale = useSharedValue(0)

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    )
  }, [scale, isFocused])

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0])

    return {
      opacity
    }
  })

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2])
    const top = interpolate(scale.value, [0, 1], [0, 9])

    return {
      transform: [{
        scale: scaleValue
      }],
      top
    }
  })

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarButton}
    >
      <Animated.View style={animatedIconStyle}>
        {icon[routeName]({ color: color })}
      </Animated.View>
      <Animated.Text style={[{ color: color, fontSize: 12 }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tabbarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
})
