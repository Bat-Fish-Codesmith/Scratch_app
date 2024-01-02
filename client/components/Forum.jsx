import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, router, Routes} from 'react-router-dom';

const Forum = (props) => {
    const [newMessage, setMessage] = useState([]);
    //const [newMessage, setNewMessage] = useState('');
    const [image, setImage] = useState(null);
    const [editingMessageId, setEditingMessageId] = useState(null);
  
// useEffect(() => {
//     fetchMessages();
// }, []);

// const fetchMessages = async () => {
//     try { 
//         // const response = await axios.get('/forum');
//         const response = await fetch('/forum');
        
//         console.log(response);
//         setMessages(response.data);
//     }  catch (error) {
//     console.log('Error fetching the forum messsages:', error);
//     }
// };
// const fetchMessages = async () => {
//   try { 
//       const response = await fetch('/forum');
      
//       console.log(response);

//       const data = await response.json();
//       setMessages(data);
//   }  catch (error) {
//   console.log('Error fetching the forum messsages:', error);
//   }
// };


    // const response = await fetch(
    //   'http://localhost:8080/forum',
    //   {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({text: newMessage, image: image})
    //   }
    // )
    // const reader = await response.json();
    // console.log(reader);

// const postMessage = async () => {
//     try {
//     const formData = new FormData();
//     formData.append('text', newMessage);
//     formData.append('image', image);

//     await axios.post('/forum', formData, {
//         headers: {
//         'Content-Type': 'multipart/form-data',
//         },
//     });
//     fetchMessages();
//     setNewMessage('');
//     setImage(null);
//     }  catch (error) {
//     console.log('Error posting the new message:', error);
//     }
// };
const postMessage = async (e) => {
    

      try {
        console.log(newMessage)
      const formData = new FormData();
      formData.append('text', newMessage);
      formData.append('image', image);
      console.log(newMessage, 'this is new message in jsx')
  
      const response = await fetch('http://localhost:3000/forum', {
          method: 'POST',
          headers: {
              //'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
          body: JSON.stringify({ text: newMessage, image: image}),
      });

      console.log("message cleared to server")

      // fetchMessages();
      setNewMessage('');
      setImage(null);
      }  catch (error) {
      console.log('Error posting the new message:', error);
      }
  };

const handleImageChange = (e) => {
    setImage(e.target.files[0]);
};

const message = { "id" : "1234", "text" : "hello world"}

// const handleLike = async (messageId) => {
//     try {
//     await axios.post('the api for this forum linked to this chat file and the ${messageId}');
//     fetchMessages();
//     }  catch (error) {
//     console.log('Error liking the post:', error);
//     }
// };
// const handleEdit = (messageId) => {
//     setEditingMessageId(messageId);
//     const messageToEdit = messages.find((message) => message._id === messageId);
//     setNewMessage(messageToEdit.text);
// }
// const cancelEdit = () => {
//     setEditingMessageId(null);
//     setNewMessage('');
// };
// const updateMessage = async (messageId) => {
//     try {
//     await axios.put('api router for forum to chat file and ${messageId}', { text: newMessage });
//     fetchMessages();
//     setEditingMessageId(null);
//     setNewMessage('');
//     }  catch (error) {
//     console.log('Error updating the message:', error);
//     }
// };
// const updateMessage = async (messageId) => {
//     try {
//       if (editingMessageId === messageId) {
//         await axios.put(`/forum/${messageId}`, { text: newMessage });
//         setEditingMessageId(null);
//         setNewMessage('');
//       } else {
//         setEditingMessageId(messageId);
//         const messageToEdit = messages.find((message) => message.id === messageId);
//         setNewMessage(messageToEdit.text);
//       }

    //   fetchMessages();
    // } catch (error) {
    //   console.log('Error updating the message:', error);
    // }
  // };

// const deleteMessage = async (messageId) => {
//     try {
//     await axios.delete(`/forum/${messageId}`);
//     fetchMessages();
//     }  catch (error) {
//     console.log('Error deleting the message selected:', error);
//     }
// };

return (
    //found something and don't know if it show go into styling or here in the top of div
    // <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
    <div className="chat-container">  
    <h2>Chat</h2>
    <div>
 {/* -------------------------------------------------------------------------- */}
{/* MOCK MESSAGE FOR STYLING */}
    {/* <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                {/* {message.image && <img src={message.image} alt="Forum" className="message-image" />} */}
                {/* <button  className="like-btn">Like</button>
                <span className="likes-count">Likes: 9</span>
                <span className="static-likes-count">Likes: 62</span>
                <button  className="edit-btn">Edit</button>
                <button  className="delete-btn">Delete</button> */}
            {/* </div> * */}
{/* -------------------------------------------------------------------------- */}
{messages.map((message) => (
          <div key={message.id} className="message-box">
            {editingMessageId === message.id ? (
              <div>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => updateMessage(message.id)} className="update-message">
                  Save
                </button>
                <button onClick={() => updateMessage(null)} className="cancel-edit">
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <p>{message.text}</p>
                {message.image && <img src={message.image} alt="Forum" className="message-image" />}
                <button onClick={() => handleLike(message.id)} className="like-btn">
                  Like
                </button>
                <span className="likes-count">Likes: {message.likes}</span>
                <button onClick={() => updateMessage(message.id)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => deleteMessage(message.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={postMessage}>
        <input
          type="text"
          placeholder="What is your message?"
          value={newMessage}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
        />
        <input 
          type="file" 
          onChange={handleImageChange} 
          className="file-input" 
          />
        <button type="submit" className="send-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Forum;