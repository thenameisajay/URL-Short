import React, { Fragment, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

function Body() {
  const [urlToShorten, setUrlToShorten] = useState("");
  const [shortUrl, setShortUrl] = useState(""); // State to hold the shortened URL

  async function SendData(event) {
    event.preventDefault();

    try {
      const endpoint = `${API_URL}/api/short`;
      const response = await axios.post(endpoint, { url: urlToShorten });
      const shortUrl = response.data; // Store the shortened URL in state
      setShortUrl(shortUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Fragment>
      <div className="input-group mb-3 custom-input-container">
        <form onSubmit={SendData} className="search-form" id="searchForm">
          <input
            type="url"
            className="form-control"
            placeholder="Enter the URL in (https://) format"
            aria-label="url-to-shorten"
            aria-describedby="button-addon2"
            required
            value={urlToShorten}
            onChange={(e) => setUrlToShorten(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary button-5"
            type="submit"
            id="button-addon2"
          >
            Short the Link
          </button>
        </form>
        {shortUrl &&
          (shortUrl === "invalid" ? (
            <p>{shortUrl.toUpperCase()}</p>
          ) : (
            <p>
              Your Short URL is:{" "}
              <a
                href={`${API_URL}/${shortUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {API_URL}/{shortUrl}
              </a>
            </p>
          ))}
      </div>
    </Fragment>
  );
}

export default Body;
