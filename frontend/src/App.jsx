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
  }, [location]);

  const search2 = useCallback(() => {
    const inputs = document.querySelectorAll("input");
    const checkedInputs = [];
    inputs.forEach((e, idx) => {
      if (idx !== 0 && e.checked) checkedInputs.push(parseInt(e.id));
    });
    const data = {
      search: inputValue,
      filters: checkedInputs,
    };
    console.log(data);
    // sendData(data, setVideos);
  }, [inputValue]);

  const search = useCallback(
    (e) => {
      e.preventDefault();
      const checkedInputs = [];
      for (let i = 0; i < e.target.length - 1; i++) {
        if (e.target[i].checked === true) {
          checkedInputs.push(parseInt(e.target[i].id));
        }
      }
      const data = {
        search: inputValue,
        filters: checkedInputs,
      };
      console.log(data);
      sendData(data, setVideos);
    },
    [inputValue]
  );

  // const test = () => {
  //   const inputs = document.querySelectorAll("input");
  //   inputs.forEach((e, i) => {
  //     if (i !== 0 && e.checked) console.log(e.id);
  //   });
  // };

  return (
    <>
      {/* <button onClick={test}>Test</button> */}
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
          search2,
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
