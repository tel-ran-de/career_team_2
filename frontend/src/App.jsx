import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import AbountUs from "./components/AbountUs";
import Footer from "./components/Footer";
import { Context } from "./context";
import { useState, useEffect, useCallback } from "react";
import { getVideos } from "./requests/getData";
import { useLocation } from "react-router-dom";
import { sendData } from "./requests/sendData";

export default function App() {
  const [videoSource, setSource] = useState("");
  const [modal, setModal] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [videos, setVideos] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getVideos(setVideos);
  }, []);

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    const data = {
      search: path,
      filters: [],
    };
    sendData(data, setVideos);
    setInputValue(path);
  }, [location]);

  const search = useCallback(() => {
    const inputs = document.querySelectorAll("input");
    const checkedInputs = [];
    inputs.forEach((e, idx) => {
      if (idx !== 0 && e.checked) checkedInputs.push(parseInt(e.id));
    });
    const data = {
      search: inputValue,
      filters: checkedInputs,
    };
    sendData(data, setVideos);
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
          inputValue,
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
