import {BrowserRouter as Router, Switch,Route,} from 'react-router-dom'
import About from './Navigation/About'
import Home from './Navigation/Home'
import Settings from './Navigation/Settings'
import Contact from './Navigation/Contact'
import Nav from './Navigation/nav'

const App = () => {
  return ( 
   <div>
     <Router>
       <Nav />
       <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/about" exact component={About}></Route>
         <Route path="/contact" exact component={Contact}></Route>
         <Route path="/settings" exact component={Settings}></Route>
       </Switch>
     </Router>
   </div>
  )

}
 
export default App;