import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Chat = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalData = useSelector(state => state);


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

  const transparentButton = {
    border: 'none',
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: globalData.backgroundColor !== 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)' ? '#FFFFFF' : 'black',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: "45px",
    float: "right",
    marginRight: '-80px'
  }

  const switchComponent = () => {
    navigate('/');

  }

  console.log(globalData, "globalDataglobalData");

  let text_color = globalData.backgroundColor !== 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)' ? '#FFFFFF' : 'black';

  return (
    <>
      <br /><br />

      <button style={transparentButton} onClick={() => switchComponent()}> Switch Component </button>

      <br />
      <Container fluid>
        <div style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '16px', maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '570px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px', flexDirection: 'column', alignItems: 'flex-end' }}>
            <label htmlFor="profilePicture" style={{ cursor: 'pointer' }}>
              {previewPicture ? (
                <img src={previewPicture} alt="Profile Picture" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              ) : (
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ccc' }} />
                // <img src="https://images6.alphacoders.com/728/728101.png" alt="Profile Picture" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              )}
            </label>
            <input
              id="profilePicture"
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              style={{ display: 'none' }}
            />
            <p style={{ color: text_color }}>Krishna</p>
          </div>
          <div style={{ flex: '1', overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: '8px', '::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>

            {showMessages.map((message, index) => (
              <div
                key={index}
                style={{
                  // backgroundColor: message.sender === 'bot' ? '#FFFFFF' : '#0084ff',
                  backgroundColor: message.sender === 'bot' ? (globalData.backgroundColor == 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)' ? '#FFFFFF' : '#075E54') : (globalData.backgroundColor == 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)' ? '#864ead' : '#383737'),
                  color: message.sender === 'bot' ? (globalData.backgroundColor == 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)' ? '#333' : '#FFFFFF') : "#FFFFFF",
                  padding: '8px 16px',
                  borderRadius: '16px',
                  marginBottom: '12px',
                  alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end',
                  maxWidth: '60%',
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

            <label htmlFor="attachImage" style={{ marginLeft: '8px', cursor: 'pointer' }}>

              <i class="bi bi-paperclip" style={{ fontSize: '24px', color: '#0084ff' }} ></i>
            </label>
            <input id="attachImage" type="file" accept="image/*" onChange={handleAttachImage} style={{ display: 'none' }} />

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
      </Container>
    </>
  );
};

export default Chat;