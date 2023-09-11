import { s } from "./App.style";
import { Home } from "./pages/Home/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {ImageBackground} from "react-native";
import backgroundImage from "./assets/background.png"
export default function App() {
  return (
    <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImage}>
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
}
