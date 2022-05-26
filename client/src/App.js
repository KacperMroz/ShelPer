import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { SignUp } from './components/pages/SignUp';
import { SignUpPersonal } from './components/pages/SignUpPersonal';
import { SignUpShelter } from './components/pages/SignUpShelter';
import Account from './components/pages/Account';
import AccountSettings from './components/pages/AccountSettings';
import Animals from './components/pages/Animals';
import Post from './components/pages/Post';
import AddPost from './components/pages/AddPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sign-up-personal" element={<SignUpPersonal />} />
          <Route path="/sign-up-shelter" element={<SignUpShelter />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/animals/:id" element={<Post />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
