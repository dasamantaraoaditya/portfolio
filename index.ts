import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    // Your Firebase configuration goes here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Components
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuControls = useAnimation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        menuControls.start(isMenuOpen ? 'closed' : 'open');
    };

    const menuVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -20 },
    };

    return (
        <header>
        <nav>
        <div className= "logo" > Personal Portfolio </div>
            < div className = "menu-icon" onClick = { toggleMenu } >
                <span className="bar" > </span>
                    < span className = "bar" > </span>
                        < span className = "bar" > </span>
                            </div>
                            < motion.ul
    className = {`menu ${isMenuOpen ? 'open' : ''}`
}
variants = { menuVariants }
animate = { menuControls }
    >
    <li>
    <Link to="/blogs" > Explore Blogs </Link>
        </li>
        < li >
        <Link to="/art" > Art </Link>
            </li>
            < li >
            <Link to="/watch-hive" > Watch Hive App </Link>
                </li>
                </motion.ul>
                </nav>
                </header>
  );
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            // Redirect to the personal workspace dashboard
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className= "login-container" >
        <h2>Login </h2>
        < input
    type = "email"
    placeholder = "Email"
    value = { email }
    onChange = {(e) => setEmail(e.target.value)}
      />
    < input
type = "password"
placeholder = "Password"
value = { password }
onChange = {(e) => setPassword(e.target.value)}
      />
    < button onClick = { handleLogin } > Login </button>
        </div>
  );
};

const Dashboard = () => {
    return (
        <div className= "dashboard-container" >
        <h2>Personal Workspace </h2>
            < div className = "section" >
                <h3>Projects </h3>
    {/* Render project cards here */ }
    </div>
        < div className = "section" >
            <h3>Fun Websites </h3>
    {/* Render fun website cards here */ }
    </div>
        < div className = "section" >
            <h3>Donations </h3>
    {/* Render donation cards here */ }
    </div>
        < div className = "section" >
            <h3>Ideas </h3>
    {/* Render idea cards here */ }
    </div>
        < div className = "section" >
            <h3>Technical Blogs </h3>
    {/* Render blog cards here */ }
    </div>
        </div>
  );
};

const WatchHive = () => {
    return (
        <div className= "watch-hive-container" >
        <h2>Watch Hive App </h2>
            <p>
        The Watch Hive is a separate application that will be accessible after
    login.This is a landing page with a teaser about the app's purpose and
        upcoming features.
      </p>
        </div>
  );
};
const App = () => {

    return (
        <Router>
        <div className= "app-container" >
        <Header />
        < Switch >
        <Route path="/login" >
            <Login />
            </Route>
            < Route path = "/dashboard" >
                <Dashboard />
                </Route>
                < Route path = "/watch-hive" >
                    <WatchHive />
                    </Route>
    {/* Add more routes for Blogs, Art, and other sections */ }
    </Switch>
        </div>
        </Router>
  );
};

export default App;