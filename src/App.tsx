import "./App.scss";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider"
import { ScrollToHashElement } from "./components/ScrollToHashElement"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
        }}
      >
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
