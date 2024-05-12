import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const CreateNewPost = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({ title: '', body: '' });

 
  if (!user) {
    
    navigate('/login');
    return null; 
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const savedPost = await savePost(postData);
      console.log('Новый пост:', savedPost);
      
      navigate('/blog');
    } catch (error) {
      console.error('Ошибка при сохранении поста:', error);
    }
  };

 
  const savePost = async (postData) => {
    
    return { id: Date.now(), ...postData };
  };

  return (
    <div className="create-new-post-page">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={postData.title}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Body:
            <textarea
              name="body"
              value={postData.body}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};
