'use client'

import React, { useState } from "react";
type Format = {
  formatId: string;  
  resolution?: string;
  ext?: string;
  type?: string;
  audioIncluded?: boolean;
  size?: string;
};

const BASE_URL = "http://54.253.12.132:3000"; 
const Main = () => {
    const [videoUrl, setVideoUrl] = useState("");
  const [formats, setFormats] = useState<Format[]>([]);
  const [selectedFormat, setSelectedFormat] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Get Formats API
const fetchFormats = async () => {
  setError("");
  setFormats([]);
  setLoading(true);

  try {
    const res = await fetch(`${BASE_URL}/api/v1/download/formats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: videoUrl }),
    });

    if (!res.ok) {
      throw new Error("Server error while fetching formats.");
    }

    const data = await res.json();

    if (!data.formats || data.formats.length === 0) {
      setError("No formats found. The video may not be downloadable.");
    } else {
      setFormats(data.formats);
      console.log("Formats received:", data.formats);
    }
  } catch (err) {
    console.error("Error fetching formats:", err);
    setError("Failed to fetch formats. Please try again.");
  } finally {
    setLoading(false);
  }
};


  // Download API
  const handleDownload = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/v1/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: videoUrl,
          formatId: selectedFormat, 
        }),
      });

      if (!res.ok) {
        throw new Error("Server error while downloading.");
      }

      const data = await res.json();

      if (data.url) {
        setDownloadUrl(data.url);
        window.open(data.url, "_blank");
      } else {
        setError("Download link not found.");
      }
    } catch (err) {
      console.error("Download failed:", err);
      setError("Failed to start download. Please try again.");
    } finally {
      setLoading(false);
    }
    console.log("Downloading with:", {
  url: videoUrl,
  formatId: selectedFormat,
});

  };

  return (
    <div className="flex flex-col justify-center items-center md:mt-40 mt-32 px-4 sm:px-6 md:px-8">
      <div className="text-center">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold">
          Free Online Video Downloader
        </h1>
      </div>

      {/* Input */}
      <div className="flex flex-col sm:flex-row w-full max-w-2xl border-2 border-lime-500 rounded-3xl mt-10 overflow-hidden">
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Paste your video link here"
          className="w-full px-4 py-3 focus:outline-none text-sm sm:text-base"
        />

        <button
          className="bg-lime-500 text-white px-6 py-3 font-semibold hover:bg-lime-600 sm:rounded-r-2xl"
          onClick={fetchFormats}
          disabled={loading || !videoUrl}
        >
         {loading ? "Loading..." : "get formats"}
        </button>
      </div>
         
         {/* Error Message */}
      {error && (
        <p className="text-red-600 mt-4 text-sm">{error}</p>
      )}

      {/* Format Dropdown */}
      {formats.length > 0 && (
        <select
          className="mt-4 border px-4 py-2 rounded-md"
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
        >
          <option value="">Select Format</option>
          {formats.map((format, index) => (
            <option key={index} value={format.formatId}>
              {format.resolution  || format.ext || "Format"}
            </option>
          ))}
        </select>
      )}

      {/* Download Button */}
      {formats.length > 0 && (
        <button
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          onClick={handleDownload}
          disabled={loading || !selectedFormat}
        >
         {loading ? "Processing..." : "Download"}
        </button>
      )}
    </div>
  );
};

export default Main;
