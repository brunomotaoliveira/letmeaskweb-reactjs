
import { createContext, useState } from 'react';
import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';

export const AuthContext = createContext({} as any);

function App() {
  const [user, setUser] = useState();

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            if (result.user) {
              
            }

        })
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;


