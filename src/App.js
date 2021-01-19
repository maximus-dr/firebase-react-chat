import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import ChatRoom from './components/ChatRoom/ChatRoom';


firebase.initializeApp({
  apiKey: "AIzaSyBScP0jEgNLqWKFSGySDr2FCxYIGe38Huw",
  authDomain: "superchat-d3a87.firebaseapp.com",
  projectId: "superchat-d3a87",
  storageBucket: "superchat-d3a87.appspot.com",
  messagingSenderId: "416568507775",
  appId: "1:416568507775:web:4bee56aaba231240edee4a"
});

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-icons">
          <div className="cat-icon"></div>
          <div className="fire-icon"></div>
          <div className="chat-icon"></div>
        </div>
        <SignOut auth={auth} />
      </header>

      <section>
        {user ? <ChatRoom auth={auth} firestore={firestore} /> : <SignIn auth={auth} />}
      </section>
    </div>
  );
}

export default App;
