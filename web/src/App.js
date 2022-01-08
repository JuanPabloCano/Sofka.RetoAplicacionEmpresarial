import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { login } from './actions/authActions';
import { PublicNavbar, PrivateNavbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from "./components/Footer"
import SingleQuestionPage from './pages/SingleQuestionPage'
import QuestionsPage from './pages/QuestionsPage'
import QuestionFormPage from './pages/QuestionFormPage'
import AnswerFormPage from './pages/AnswerFormPage'
import OwnerQuestionsPage from './pages/OwnerQuestionsPage'
import { useAuthState } from "react-firebase-hooks/auth";
import LoginForm from "./pages/LoginForm";
import UserRegisterForm from './pages/RegisterForm';


const auth = firebase.auth();

const App = ({ dispatch }) => {
  const [user] = useAuthState(auth);
  if (user) {
    dispatch(login(user.email, user.uid, user.photoURL, user.displayName))
  }
  return (
    <>
      <Router>
        {user ?
          <>
            <PrivateNavbar />
            <Switch>
              <Route exact path="/" component={() => {
                return <HomePage></HomePage>
              }} />
              <Route exact path="/questions" component={QuestionsPage} />
              <Route exact path="/question/:id" component={SingleQuestionPage} />
              <Route exact path="/list" component={OwnerQuestionsPage} />
              <Route exact path="/answer/:id" component={AnswerFormPage} />
              <Route exact path="/new" component={QuestionFormPage} />
              <Redirect to="/" />
            </Switch>
          </> :
          <>
            <PublicNavbar />
            <Switch>
              <Route exact path="/" component={() => {
                return <HomePage><SignIn dispatch={dispatch} /></HomePage>
              }} />
              <Route exact path="/questions" component={QuestionsPage} />
              <Route exact path="/question/:id" component={SingleQuestionPage} />
              <Route exact path="/answer/:id" component={AnswerFormPage} />
              <Route exact path="/login" component={LoginForm} dispatch={dispatch} />
              <Route exact path="/userRegister" component={UserRegisterForm} dispatch={dispatch} />
              <Redirect to="/" />
            </Switch>
          </>
        }
      </Router>
      <Footer></Footer>
    </>
  )
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button className="btn btn-dark button right" onClick={signInWithGoogle}>Sign in with google</button>;
}

export default App;
