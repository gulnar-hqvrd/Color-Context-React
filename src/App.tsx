import React, { useContext } from "react";
import "./App.css";
import { ConfigContext, ConfigProvider } from "./contexts/ThemeContext";
import Index from "./components/Catagoty";

function App() {
  const { theme } = useContext(ConfigContext);
  return (
    <ConfigProvider>
      <div style={theme}>
        <Index />
      </div>
    </ConfigProvider>
  );
}

export default App;
