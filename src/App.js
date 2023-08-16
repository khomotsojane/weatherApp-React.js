import "./App.css";
import axios from "axios";
import React, {useState} from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home";
import Page404 from "./Components/Page404";x

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
