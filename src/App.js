import './App.css';
import React from 'react'

function App() {
  return (
  <section>
    <div className="time hoursmin">
      <h2 id="hours">00</h2>
      <h2 id="colon">:</h2>
      <h2 id="minutes">00</h2>
    </div>
    <div className="time sec">
      <span id="ampm"></span>
      <h2 id="seconds">00</h2>
    </div>
  </section>
  );
}

function Real_time()
{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let real_hours = new Date().getHours();
    let real_minutes = new Date().getMinutes();
    let real_seconds = new Date().getSeconds();
    let real_ampm;

    if(real_hours <= 12) {
      real_ampm = 'AM';
    }
    else {
      real_ampm = 'PM';
    }

    hours.innerHTML = real_hours;
    minutes.innerHTML = real_minutes;
    seconds.innerHTML = real_seconds;
    ampm.innerHTML = real_ampm;

}

setInterval(Real_time, 1000);

export default App;
