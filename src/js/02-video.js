import Player from "@vimeo/player";
import { throttle } from "lodash";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const currentTime = localStorage.getItem("videoplayer-current-time");

if (currentTime) {
  player.setCurrentTime(currentTime);
}

const onTimeUpdate = (event) => {
  localStorage.setItem(
    "videoplayer-current-time",
    JSON.stringify(event.seconds)
  );
};

player.on("timeupdate", throttle(onTimeUpdate, 1000));
