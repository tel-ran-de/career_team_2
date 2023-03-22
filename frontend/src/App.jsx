import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import AbountUs from "./components/AbountUs";
import Footer from "./components/Footer";
import { Context } from "./context";
import { useState, useEffect, useCallback } from "react";
import { getVideos } from "./requests/getData";
import { sendData } from "./requests/sendData";

export default function App() {
  const [videoSource, setSource] = useState("");
  const [modal, setModal] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos(setVideos);
  }, []);

  const search = useCallback((e) => {
    e.preventDefault();
    const arr = [];
    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].checked === true) arr.push(parseInt(e.target[i].id));
    }
    const data = {
      search: inputValue,
      filter: arr,
    };
    console.log(data);
    // sendData(data, setVideos);
  }, [inputValue]);

  return (
    <>
      <Context.Provider
        value={{
          videoSource,
          setSource,
          modal,
          setModal,
          search,
          videos,
          setVideos,
          setInputValue,
        }}
      >
        <Nav />
        <Header />
        <MainContent menuActive={menuActive} setMenuActive={setMenuActive} />
        <AbountUs />
        <Footer />
      </Context.Provider>
    </>
  );
}
