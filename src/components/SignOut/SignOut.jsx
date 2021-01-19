export default function SignOut(props) {
  return props.auth.currentUser && (
    <button className="sign-out" onClick={() => props.auth.signOut()}>
      Sign Out
    </button>
  )
}
