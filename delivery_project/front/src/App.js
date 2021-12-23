import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Issue from "./components/Issue";
import CleanMap from "./components/CleanMap";
import StoreDetail from "./components/StoreDetail";
import MenuHunt from "./components/MenuHunt";
import MenuCup from "./components/MenuCup";
// import Map from "./components/Map";
import About from "./components/About";

import { Helmet } from 'react-helmet'

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Helmet>
        <title>클린한끼</title>
        <link href="//font.elice.io/EliceDigitalBaeum.css" rel="stylesheet"></link>
      </Helmet>

      <Navbar />
      {/* 
            Header 내에서도 Link 컴포넌트를 사용하기 위해 BrowsetRouter에 포함.
            Header 컴포넌트는 Route에 감싸주지 않았기 때문에 어떤 경로에도 고정으로 적용
          */}
      <Route path="/" exact><Home /></Route>
      <Route path="/menu"><Menu /></Route>
      <Route path="/issue"><Issue /></Route>
      <Route path="/cleanMap"><CleanMap /></Route>
      <Route path="/storeDetail"><StoreDetail /></Route>
      <Route path="/menuHunt"><MenuHunt /></Route>
      <Route path="/menuCup"><MenuCup /></Route>
      <Route path="/about"><About /></Route>
    </BrowserRouter>
  );
}

export default App;
