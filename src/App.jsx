import { useState, useEffect, useRef } from "react";
import "./App.css";
import { getDate } from "./helpers";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
  const [search, setSearch] = useState("UK");
  const [language, setLanguage] = useState("en");

  const todaysDate = useRef(new Date().toJSON().slice(0, 10));
  const footerDate = useRef(new Date().getFullYear());
  const searchRef = useRef();

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://newsapi.org/v2/everything?q=${search}&to=${todaysDate.current}&language=${language}&pageSize=50&sortBy=popularity&page=1&apiKey=${API_KEY}`;

  useEffect(() => {
    setData({
      results: null,
      loading: true,
      error: null,
    });

    fetch(URL)
      .then((response) => response.json())
      .then((results) => setData({ results, loading: false, error: null }))
      .catch((error) => setData({ results: null, loading: false, error }));
  }, [URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchRef.current.value);
    searchRef.current.value = "";
    searchRef.current.focus();
  };

  const languageHandler = (e) => {
    setLanguage(e.target.value);
    searchRef.current.focus();
  };

  return (
    <main>
      <Header
        handleSubmit={handleSubmit}
        language={language}
        languageHandler={languageHandler}
        searchRef={searchRef}
        todaysDisplayDate={getDate()}
      />
      <NewsList data={data}/>
      <Footer footerDate={footerDate}/>
    </main>
  );
};

export default App;
