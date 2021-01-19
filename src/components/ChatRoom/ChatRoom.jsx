
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState, useRef } from 'react';
import ChatMessage from './ChatMessage';


export default function ChatRoom(props) {
  const dummy = useRef();
  const messagesRef = props.firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();    
    if (!formValue) return;
    
    const { uid, photoURL } = props.auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={props.auth} />)}

        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={e => setFormValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
