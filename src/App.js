import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
      <App2 />
    </>
  );
}

// export function App2() {
function App2() {
  return (
    <>
      <h1>App2</h1>
    </>
  );
}

export { App2 };
export default App;
// export { App, App2 };
