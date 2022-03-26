import { useState } from 'react';

export default function ContactForm() {
  const [senderName, setSenderName] = useState('');
  const [messageBody, setMessageBody] = useState('');

  return (
    <form>
      <input
        type="text"
        name="name"
        onChange={e => {
          setSenderName(e.target.value);
        }}
      />
      <input
        type="text"
        name="body"
        onChange={e => {
          setMessageBody(e.target.value);
        }}
      />
    </form>
  );
}
