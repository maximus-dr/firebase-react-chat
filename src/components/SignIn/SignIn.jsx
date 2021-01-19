import firebase from 'firebase/app';
import s from './SignIn.module.css';

export default function SignIn(props) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className={s.signIn} onClick={signInWithGoogle}>
        Sign In with Google
      </button>
      <h2 className={s.introTitle}>
        Welcome to our SuperChat!
      </h2>
      <p className={s.introText}>
        Do not violate the community guidelines or you'll be banned for live!
      </p>
    </>
  )
}
