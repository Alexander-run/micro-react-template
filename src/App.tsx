import React from 'react';
import logo from './logo192.png'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
