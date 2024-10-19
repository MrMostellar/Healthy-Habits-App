import { Stack } from "expo-router";


export default function recipeLayout(){
    return(
        <Stack>
            <Stack.Screen name="[recipe]"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}