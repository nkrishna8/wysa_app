import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export default function Chat() {


//   const loginUser = useSelector(state => state.adminUserId);

//   return (
//     <>
//     <h4>Chat Page</h4>
//       {loginUser ? <h3 style={{ marginTop: "85px" }}>Loggin AS : {loginUser}</h3> : null}

//     </>

//   )
// }

// import styled from 'styled-components';


// const Message = styled.div`
//   background-color: ${props => props.sender === 'bot' ? '#e6e6e6' : '#0084ff'};
//   color: ${props => props.sender === 'bot' ? '#333' : '#fff'};
//   padding: 8px 16px;
//   border-radius: 16px;
//   margin-bottom: 8px;
//   align-self: ${props => props.sender === 'bot' ? 'flex-start' : 'flex-end'};
// `;

// export default function Chat() {

//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hi there! 👋' },
//     { sender: 'bot', text: "I'm Wysa - an AI chatbot built by therapists." },
//     { sender: 'bot', text: "I'm here to understand your concerns\n and connect you with the best resources available to support you." },
//     { sender: 'bot', text: 'Can I help?' },
//     // { sender: 'stu', text: 'Can I help?' },
//   ]);

//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     console.log("InputValue==>>",e.target.value);
//     setInputValue(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (inputValue.trim()) {
//       setMessages([...messages, { sender: 'user', text: inputValue.trim() }]);
//       setInputValue('');
//       // Add logic to handle bot response here
//     }
//   };

//   return (
//     <>
//       <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//         <Link to='/'>Home</Link><br />
//         {/* <Link to='comp'>Component</Link><br /> */}
//       </section>

//       <br></br> <br></br>
//       <Container fluid>
//         <div style={{ backgroundColor: 'transparent', padding: '16px', maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '500px' }}>
//           <div style={{ flex: '1', overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: '8px' }}>
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 style={{
//                   backgroundColor: message.sender === 'bot' ? '#FFFFFF' : '#0084ff',
//                   color: message.sender === 'bot' ? '#333' : '#fff',
//                   padding: '8px 16px',
//                   borderRadius: '12px',
//                   marginBottom: '12px',
//                   alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end',
//                   maxWidth: '80%',
//                 }}
//               >
//                 {message.text}
//               </div>
//             ))}
//           </div>

//           <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={inputValue}
//               onChange={handleInputChange}
//               style={{ flex: '1', padding: '8px 16px', borderRadius: '16px', border: 'none', outline: 'none', fontSize: '16px' }}
//             />
//             <button
//               onClick={handleSendMessage}
//               style={{
//                 backgroundColor: '#0084ff',
//                 color: '#fff',
//                 padding: '8px 16px',
//                 borderRadius: '16px',
//                 border: 'none',
//                 outline: 'none',
//                 fontSize: '16px',
//                 marginLeft: '8px',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.3s ease',
//               }}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = '#0072e5')}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = '#0084ff')}
//             >
//               Send
//             </button>
//           </div></div>
//       </Container>
//     </>
//   );
// };


// import React, { useState, useEffect } from 'react';

// const Chat= () => {
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hi there! 👋' },
//     { sender: 'bot', text: "I'm Wysa - an AI chatbot built by therapists." },
//     { sender: 'bot', text: 'https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-chatbot-robot-concept-chat-bot-png-image_5632381.png' },
//     { sender: 'bot', text: "I'm here to understand your concerns and connect you with the best resources available to support you." },
//     { sender: 'bot', text: 'Can I help?' },
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [showMessages, setShowMessages] = useState([]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (messages.length > 0) {
//         setShowMessages((prevShowMessages) => [...prevShowMessages, messages[0]]);
//         setMessages((prevMessages) => prevMessages.slice(1));
//       } else {
//         clearInterval(timer);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [messages]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (inputValue.trim()) {
//       setMessages([...messages, { sender: 'user', text: inputValue.trim() }]);
//       setInputValue('');
//       // Add logic to handle bot response here
//     }
//   };

//   const isValidImageUrl = (url) => {
//     try {
//       new URL(url);
//     } catch (_) {
//       return false;
//     }
//     return true;
//   };

//   return (
// <>
//     <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//            <Link to='/'>Home</Link><br />
//             {/* <Link to='comp'>Component</Link><br /> */}
//            </section>
    
//           <br></br> <br></br>
//           <Container fluid>
//     <div style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '16px', maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '500px' }}>
//       <div style={{ flex: '1', overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: '8px', '::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
//         {showMessages.map((message, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: message.sender === 'bot' ? '#FFFFFF' : '#0084ff',
//               color: message.sender === 'bot' ? '#333' : '#fff',
//               padding: '8px 16px',
//               borderRadius: '12px',
//               marginBottom: '12px',
//               alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end',
//               maxWidth: '80%',
//               display: 'flex',
//               flexDirection: 'column',
//             }}
//           >
//             {isValidImageUrl(message.text) ? (
//               <img src={message.text} alt="Chat Image" style={{ maxWidth: '100%', borderRadius: '8px' }} />
//             ) : (
//               message.text
//             )}
//           </div>
//         ))}
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={inputValue}
//           onChange={handleInputChange}
//           style={{ flex: '1', padding: '8px 16px', borderRadius: '16px', border: 'none', outline: 'none', fontSize: '16px' }}
//         />
//         <button
//           onClick={handleSendMessage}
//           style={{
//             backgroundColor: '#0084ff',
//             color: '#fff',
//             padding: '8px 16px',
//             borderRadius: '16px',
//             border: 'none',
//             outline: 'none',
//             fontSize: '16px',
//             marginLeft: '8px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s ease',
//           }}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = '#0072e5')}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = '#0084ff')}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//     </Container>
//     </>
//   );
// };

// export default Chat;




const Chat= () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! 👋' },
    { sender: 'bot', text: "I'm Wysa - an AI chatbot built by therapists." },
    { sender: 'bot', text: 'https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-chatbot-robot-concept-chat-bot-png-image_5632381.png' },
    { sender: 'bot', text: "I'm here to understand your concerns and connect you with the best resources available to support you." },
    { sender: 'bot', text: 'Can I help?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showMessages, setShowMessages] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewPicture, setPreviewPicture] = useState(null);
  const [attachedImage, setAttachedImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messages.length > 0) {
        setShowMessages((prevShowMessages) => [...prevShowMessages, messages[0]]);
        setMessages((prevMessages) => prevMessages.slice(1));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() || attachedImage) {
      const newMessage = { sender: 'user', text: inputValue.trim() };
      if (attachedImage) {
        newMessage.image = attachedImage;
      }
      setMessages([...messages, newMessage]);
      setInputValue('');
      setAttachedImage(null);
      // Add logic to handle bot response here
    }
  };

  const isValidImageUrl = (url) => {
    try {
      new URL(url);
    } catch (_) {
      return false;
    }
    return true;
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    setPreviewPicture(URL.createObjectURL(file));
  };

  const handleAttachImage = (e) => {
    const file = e.target.files[0];
    setAttachedImage(file);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '16px', maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '500px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
        <label htmlFor="profilePicture" style={{ cursor: 'pointer' }}>
          {previewPicture ? (
            <img src={previewPicture} alt="Profile Picture" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          ) : (
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ccc' }} />
          )}
        </label>
        <input
          id="profilePicture"
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
          style={{ display: 'none' }}
        />
      </div>
      <div style={{ flex: '1', overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: '8px', '::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
        {showMessages.map((message, index) => (
          <div
            key={index}
            style={{
              backgroundColor: message.sender === 'bot' ? '#e6e6e6' : '#0084ff',
              color: message.sender === 'bot' ? '#333' : '#fff',
              padding: '8px 16px',
              borderRadius: '16px',
              marginBottom: '8px',
              alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end',
              maxWidth: '70%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {isValidImageUrl(message.text) ? (
              <img src={message.text} alt="Chat Image" style={{ maxWidth: '100%', borderRadius: '8px' }} />
            ) : (
              message.text
            )}
            {message.image && (
              <img src={URL.createObjectURL(message.image)} alt="Attached Image" style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '8px' }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
        
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
          style={{ flex: '1', padding: '8px 16px', borderRadius: '16px', border: 'none', outline: 'none', fontSize: '16px' }}
        />
         {/* <input id="attachImage" type="file" accept="image/*" onChange={handleAttachImage} /> */}
        <label htmlFor="attachImage" style={{ marginLeft: '8px', cursor: 'pointer' }}>
          <i className="fa fa-paperclip" style={{ fontSize: '24px', color: '#0084ff' }} />
        </label>
        <input id="attachImage" type="file" accept="image/*" onChange={handleAttachImage} />
        <button
          onClick={handleSendMessage}
          style={{
            backgroundColor: '#0084ff',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '16px',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            marginLeft: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0072e5')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#0084ff')}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;