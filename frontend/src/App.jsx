import { useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="py-3 main">
        <Container>
        <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
