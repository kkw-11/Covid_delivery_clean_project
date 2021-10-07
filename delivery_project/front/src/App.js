import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import GlobalStyles from './GlobalStyles';

import Header from "./components/Header";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Menu2 from "./components/Menu2";
import Map from "./components/Map";


const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      {/* 
            Header 내에서도 Link 컴포넌트를 사용하기 위해 BrowsetRouter에 포함.
            Header 컴포넌트는 Route에 감싸주지 않았기 때문에 어떤 경로에도 고정으로 적용
          */}
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/intro">
        <Intro />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/menu2">
        <Menu2 />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
    </BrowserRouter>
  );
}

export default App;
