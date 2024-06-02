import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Layout/Header/Header";
import { AppRouter } from "./Routes/Routes";
import "./App.css";
import { SideBar } from "./Components/Layout/SideBar/SideBar";
import { SideBarProvider } from "./Context/SideBarProvider/SideBarProvider";
import { Stack } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Stack h="100vh">
        <Header />
        <SideBarProvider>
          <SideBar />
          <Routes>{AppRouter}</Routes>
        </SideBarProvider>
      </Stack>
    </>
  );
}
export default App;
