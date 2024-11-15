//import "./App.css";
import { CountButton } from "@/components/CountButton.jsx";
import { DrawerAppBar } from "@/components/DrawerAppBar.jsx";

export const App = () => {
  return (
    <>
      <DrawerAppBar></DrawerAppBar>
      <CountButton></CountButton>
      <img src="/image.jpg" height="200"></img>
    </>
  );
};
