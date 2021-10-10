import React from "react";
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  // let endday = "Oct 11, 2021 08:00:00";
  let endday = "Mon, 11 Oct 2021 15:00:00 GMT";
  const countDown = new Date(endday).getTime(),
    x = setInterval(function () {
      let today = new Date().toUTCString();
      const now = new Date(today).getTime(),
        distance = countDown - now;
      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText =
          "Go Grab yours one !!!";
        document.getElementById("countdown").style.display = "none";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
export default function CountdownTimer() {
  return (
    <div class="container">
      <h1 id="headline">Launching On</h1>
      <p>Mon, 11 Oct 2021 03:00:00 PM GMT</p>
      <div id="countdown">
        <ul>
          <li>
            <span id="days"></span>days
          </li>
          <li>
            <span id="hours"></span>Hours
          </li>
          <li>
            <span id="minutes"></span>Minutes
          </li>
          <li>
            <span id="seconds"></span>Seconds
          </li>
        </ul>
      </div>
    </div>
  );
}
