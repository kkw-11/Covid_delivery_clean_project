import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import MenuHunt from './components/MenuHunt';
import MenuWorldcup from './components/MenuWorldcup';
import SearchPlace from './components/SearchPlace';



function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          {/* 메인 페이지 */}
          <Route exact path="/" component={Main}/> 
          {/* 메뉴 추천 페이지 */}
          <Route path="/menu-hunt" component={MenuHunt}/>
          <Route path="/menu-worldcup" component={MenuWorldcup}/>
          {/* 가게 추천 페이지 */}
          <Route path="/search-place" component={SearchPlace}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
