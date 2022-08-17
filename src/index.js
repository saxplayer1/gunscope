import React from 'react';
import ReactDOM from 'react-dom/client';
import PostCard from './components/post-card/post-card';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='posts'>

    <PostCard />
    
    <PostCard />
    
    <PostCard />
    </div>
  </React.StrictMode>
);
