import { ReactNode } from "react";
import Animated, { useAnimatedStyle, interpolate, Extrapolation } from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

export function DrawerSceneWrapper({ children }: { children: ReactNode }) {

    const progress = useDrawerProgress()

    const animatedStyled = useAnimatedStyle(() => ({
        transform: [
            { scale: interpolate(progress.value, [0, 1], [1, 0.8], Extrapolation.CLAMP) },
        ],
        borderRadius: 20,
        overflow: 'hidden'
    }))

    return (
        <Animated.View style={[{ flex: 1 }, animatedStyled]}>
            {children}
        </Animated.View>
    )
}