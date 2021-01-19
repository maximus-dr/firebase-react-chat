import firebase from 'firebase/app';
import s from './SignIn.module.css';

export default function SignIn(props) {
  console.log(props);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className={s.signIn} onClick={signInWithGoogle}>
        Sign In with Google
      </button>
      <p>
        Do not violate the community guidelines or you'll be banned for live!
      </p>
    </>
  )
}
