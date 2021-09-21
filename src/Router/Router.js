import React from 'react' 
import { BrowserRouter as Router, Route, Switch, NavLink  } from 'react-router-dom'
import './Router.css';
import LocationWithRouter from './Nav'

const Home = () => <div>Home</div>
const About = () => <div>About<LocationWithRouter/></div>

const Post = () => <div>Post</div>

const Blog = props => (
    <div>Blog
        <Route path={`${props.match.url}/post`} component={Post}/>
    </div>
)

const PageNotFound = () => <div>Page Not Found. Error 404</div> 

class KanbanRouter extends React.Component {
render(){
    return(
        <Router>
            <ul>
                <li><NavLink to ='/'>Home</NavLink></li>
                <li><NavLink to ='/about' activeClassName='active'>About</NavLink></li>
                <li><NavLink to ='/blog'>Blog</NavLink></li>
            </ul>
            <Switch>
                <Route path='/' exact component={Home}/>
                {/* <Redirect from='/about' to='/blog'/> */}
                <Route path='/about' exact component={About}/>
                <Route path='/blog' exact component={Blog}/>
                <Route path='*' component={PageNotFound}/>
            </Switch>
        </Router>
    )
}
}

export default KanbanRouter;