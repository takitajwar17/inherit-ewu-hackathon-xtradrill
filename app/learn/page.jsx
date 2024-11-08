"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_IDS = [
  "UC8butISFwT-Wl7EV0hUK0BQ", // freeCodeCamp.org
  "UC59K-uG2A5ogwIrHw4bmlEg", // Telusko Learnings
];

const LearnPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const promises = CHANNEL_IDS.map((channelId) =>
        axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: "snippet",
            channelId: channelId,
            maxResults: 5,
            order: "date",
            key: API_KEY,
          },
        })
      );
      const results = await Promise.all(promises);
      const allVideos = results.flatMap((result) => result.data.items);
      setVideos(allVideos);
    } catch (error) {
      console.error("Error fetching videos", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    router.push(`/search?query=${searchTerm}`);
  };

  return (
    <div>
      <header>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for coding videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <main>
        <div className="video-grid">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="video-card"
              onClick={() => router.push(`/learn/${video.id.videoId}`)}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.channelTitle}</p>
            </div>
          ))}
        </div>
      </main>
     
    </div>
  );
};

export default LearnPage;
