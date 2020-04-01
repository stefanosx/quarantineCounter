import React, { useEffect, useState } from "react";
import { cookies } from "./utils/cookies";
import moment from "moment";
import "./App.css";

const getJoke = async () => {
  let response = await fetch("https://api.jokes.one/jod", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

const fetchJoke = async ({ cookies }) => {
  const response = await getJoke();
  if (!response.error) {
    const today = moment().format("DD/MM/YYYY");
    cookies.set("cacheExpired", today);
    cookies.set("joke", response);
  }

  return response;
};

const Joke = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const getCachedJoke = async () => {
      const cacheExpired = cookies.get("cacheExpired");
      let response;
      if (cacheExpired === undefined || cacheExpired === "undefined") {
        response = await fetchJoke({ cookies });
      } else {
        const today = moment(new Date()).format("DD/MM/YYYY");
        if (cacheExpired === today) {
          response = cookies.get("joke");
        } else {
          response = await fetchJoke({ cookies });
        }
      }

      setResponse(response);
    };

    getCachedJoke();
  }, []);

  if (!response?.contents) {
    return (
      <div className="joke">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="joke">
      <div className="joke-header">
        <span>Joke of the day</span>
        <br />
        <small>{`Copyright: ${response.contents.copyright}`}</small>
      </div>
      <h3>{response.contents.jokes[0].joke.title}</h3>
      <h4>{response.contents.jokes[0].joke.text}</h4>
    </div>
  );
};

export default Joke;
