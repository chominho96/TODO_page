const clock = document.querySelector(".clock");
const ampm = document.querySelector(".am-pm");

function clockUpdate() {
  // update clock every second
  const time = new Date();

  let tempHour = time.getHours();
  let AM_PM = "AM";

  // provide AM/PM
  if (tempHour >= 12) {
    // if it is PM
    AM_PM = "PM";
    if (tempHour !== 12) {
      // EXCEPTION : 12 PM should be 12
      tempHour -= 12;
    }
  }

  const hour = String(tempHour).padStart(2, "0");
  const minute = String(time.getMinutes()).padStart(2, "0");
  const second = String(time.getSeconds()).padStart(2, "0");

  // set time
  clock.innerText = `${hour} : ${minute} : ${second}`;
  ampm.innerText = AM_PM;
}

clockUpdate();
setInterval(clockUpdate, 1000);
