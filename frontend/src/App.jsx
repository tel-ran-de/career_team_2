import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import AbountUs from "./components/AbountUs";
import Footer from "./components/Footer";
import { Context } from "./context";
import { useState, useCallback } from "react";
import { sendData } from "./requests/sendData";

export default function App() {
  const [videoSource, setSource] = useState("");
  const [modal, setModal] = useState(false);

  const search = useCallback((e) => {
    e.preventDefault();
    const data = {
      accounting: e.target.accounting.checked,
      marketing: e.target.marketing.checked,
      computer_it: e.target.computer_it.checked,
      computer_it2: e.target.computer_it2
        ? e.target.computer_it2.checked
        : false,
      aviation: e.target.aviation.checked,
      it_telecom: e.target.it_telecom.checked,
      healthcare: e.target.healthcare.checked,
      computer_it3: e.target.computer_it3
        ? e.target.computer_it3.checked
        : false,
      microenterprises: e.target.microenterprises.checked,
      smallenterprises: e.target.smallenterprises.checked,
      mediumenterprises: e.target.mediumenterprises.checked,
      largeenterprises: e.target.largeenterprises.checked,
    };
    console.log(data);
    // sendData(data);
  }, []);

  return (
    <>
      <Context.Provider
        value={{ videoSource, setSource, modal, setModal, search }}
      >
        <Nav />
        <Header />
        <MainContent />
        <AbountUs />
        <Footer />
      </Context.Provider>
    </>
  );
}
