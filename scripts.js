// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
    console.log("page is fully loaded");
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById('missionAbort');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    const rocket = document.getElementById('rocket');
    let position = 0;

    takeoff.addEventListener("click", event => {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = 10000;
        }
    });

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = 'The Shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.marginLeft = 0;
    });

    missionAbort.addEventListener("click", event => {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.marginLeft = 0;
        }
    });

    up.addEventListener("click", () => {
        spaceShuttleHeight.innerHTML  = Number(spaceShuttleHeight.innerHTML) + 10000;
    });
    down.addEventListener("click", () => {
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });
    left.addEventListener("click", () => {
        if (rocket.getBoundingClientRect().left > shuttleBackground.getBoundingClientRect().left) {
            position -= 10;
            rocket.style.marginLeft = position + 'px';
        }
    });
    right.addEventListener("click", () => {
        if (rocket.getBoundingClientRect().right < shuttleBackground.getBoundingClientRect().right) {
            position += 10;
            rocket.style.marginLeft = position + 'px';
        }
    });
  });