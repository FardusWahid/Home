"use client";
import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default function Player({ Id }) {
  const videoId = atob(decodeURIComponent(Id));
  const playerRef = useRef(null);

  const playerOptions = {
    type: "youtube",
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "captions",
      "settings",
      "fullscreen",
    ],
    settings: ["speed", "captions"],
    keyboard: {
      focused: true,
      global: true,
    },
    youtube: {
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      vq: "hd1080",
    },
  };

  useEffect(() => {
    const player = new Plyr(playerRef.current, playerOptions);
    playerRef.current.plyr = player;

    // Add fullscreen handling
    player.on("enterfullscreen", () => {
      try {
        if (window.screen?.orientation && window.innerWidth < 768) {
          window.screen.orientation.lock("landscape").catch(() => {});
        }
      } catch (e) {}
    });

    player.on("exitfullscreen", () => {
      try {
        if (window.screen?.orientation) {
          window.screen.orientation.unlock();
        }
      } catch (e) {}
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="w-full lg:ml-2 lg:w-[80%] xl:w-[75%] aspect-video">
      <div
        ref={playerRef}
        data-plyr-provider="youtube"
        data-plyr-embed-id={videoId}
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "16/9",
        }}
      ></div>
      <style>
        {`
          iframe {
            pointer-events: none;
          }
          .plyr__control {
            pointer-events: auto;
          }
          .plyr__control:hover {
            cursor: pointer;
          }
          .plyr--full-ui {
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
}
