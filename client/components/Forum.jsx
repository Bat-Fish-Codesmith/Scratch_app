import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, router, Routes} from 'react-router-dom'

const Forum = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [image, setImage] = useState(null);
    const [editingMessageId, setEditingMessageId] = useState(null);
  
useEffect(() => {
    fetchMessages();
}, []);

const fetchMessages = async () => {
    try { 
    const response = await axios.get('the api router for this forum');
    setMessages(response.data);
    }  catch (error) {
    console.log('Error fetching the forum messsages:', error);
    }
};

const postMessage = async () => {
    try {
    const formData = new FormData();
    formData.append('text', newMessage);
    formData.append('image', image);

    await axios.post('the api router for this forum', formData, {
        headers: {
        'Content-Type': 'multipart/form-data',
        },
    });
    fetchMessages();
    setNewMessage('');
    setImage(null);
    }  catch (error) {
    console.log('Error posting the new message:', error);
    }
};

const handleImageChange = (e) => {
    setImage(e.target.files[0]);
};

const handleLike = async (messageId) => {
    try {
    await axios.post('the api for this forum linked to this chat file and the ${messageId}');
    fetchMessages();
    }  catch (error) {
    console.log('Error liking the post:', error);
    }
};
const handleEdit = (messageId) => {
    setEditingMessageId(messageId);
    const messageToEdit = messages.find((message) => message._id === messageId);
    setNewMessage(messageToEdit.text);
}
const cancelEdit = () => {
    setEditingMessageId(null);
    setNewMessage('');
};
const updateMessage = async (messageId) => {
    try {
    await axios.put('api router for forum to chat file and ${messageId}', { text: newMessage });
    fetchMessages();
    setEditingMessageId(null);
    setNewMessage('');
    }  catch (error) {
    console.log('Error updating the message:', error);
    }
};

const deleteMessage = async (messageId) => {
    try {
    await axios.delete('the api router for this forum to file chat and ${messageId}');
    fetchMessages();
    }  catch (error) {
    console.log('Error deleting the message selected:', error);
    }
};

return (
    //found something and don't know if it show go into styling or here in the top of div
    // <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
    <BrowserRouter>
        <Routes path="/forum" component={"./components/Forum.jsx"} />
    <div>  
    <h2>Chat</h2>
    <div>
        {messages.map((message) => (
        <div key={message._id}>
            {editingMessageId === message._id ? (
            <div>
                <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={() => updateMessage(message._id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
            </div>
            ) : (
            <div>
                <p>{message.text}</p>
                {message.image && <img src={message.image} alt="Forum" />}
                <button onClick={() => handleLike(message._id)}>Like</button>
                <span>Likes: {message.likes}</span>
                <span>Likes: 62</span>
                <button onClick={() => handleEdit(message._id)}>Edit</button>
                <button onClick={() => deleteMessage(message._id)}>Delete</button>
            </div>
            )}
        </div>
        ))}
    </div>
    <div>
        <input
        type="text"
        placeholder="What is your message?"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        />
        <input type="file" onChange={handleImageChange} />
        <button onClick={postMessage}>Send</button>
    </div>
    </div>
    </BrowserRouter>
);
};

export default Forum;