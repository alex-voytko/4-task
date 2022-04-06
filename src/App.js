import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import SignInView from "./views/SignInView";
import SignUpView from "./views/SignUpView";
import ErrorView from "./views/ErrorView";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/signin" element={<SignInView />} />
          <Route path="/signup" element={<SignUpView />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
