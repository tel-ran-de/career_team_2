import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import AbountUs from "./components/AbountUs";
import Footer from "./components/Footer";
import { Context } from "./context";
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendData } from "./requests/sendData";

export default function App() {
  const [videoSource, setSource] = useState("");
  const [modal, setModal] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.replace("/", "").replace("%20", " ");
    const data = {
      search: path,
      filters: [],
    };
    setTimeout(() => {
      setInputValue(path);
      setSearchTitle(path);
      sendData(data, setVideos);
    }, 5);
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
    setSearchTitle(inputValue);
    sendData(data, setVideos);
    // navigate(inputValue);
  }, [inputValue, navigate]);

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
          searchTitle,
          setSearchTitle,
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
