import logo from './logo.svg';
import './App.css';

function UserGreeting() {
  return <h1>Welcome Back User!</h1>
}
function GuestGreeting() {
  return <h1>Please Signup</h1>
}

function App(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />
  }else {
    return <GuestGreeting />
  }
}

export default App;

// Pass Props as follow in index.js
// <App isLoggedIn = {false} />