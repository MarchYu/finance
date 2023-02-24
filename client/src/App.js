import "./App.css";
import { RecoilRoot } from "recoil";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <RecoilRoot>
      <div className="App" data-testid="app">
        <Header />
        <Main />
      </div>
    </RecoilRoot>
  );
}

export default App;
