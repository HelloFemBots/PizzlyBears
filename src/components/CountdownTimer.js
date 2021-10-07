import React from "react";
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  //   let today = new Date(),
  //     dd = String(today.getDate()).padStart(2, "0"),
  //     mm = String(today.getMonth() + 1).padStart(2, "0"),
  //     yyyy = today.getFullYear(),
  // let nextYear = "2021";
  // let dayMonth = "10/06/";

  //   today = mm + "/" + dd + "/" + yyyy;
  //   if (today > endday) {
  //     endday = dayMonth + nextYear;
  //   }
  //end
  
  //   PST Time
  let endday = "Oct 11, 2021 08:00:00";
  const countDown = new Date(endday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
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
        document.getElementById("headline").innerText = "Thank You for Being With Us!";
        document.getElementById("countdown").style.display = "none";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
export default function CountdownTimer() {
  return (
    <div class="container">
      <h1 id="headline">Countdown Ends On</h1>
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
