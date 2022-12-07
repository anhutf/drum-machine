const drumPad = document.querySelectorAll(".drum-pad");
const listAudio = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const audioName = [
  "Heater 1",
  "Heater 2",
  "Heater 3",
  "Heater 4",
  "Clap",
  "Open-HH",
  "Kick-n'-Hat",
  "Kick",
  "Closed-HH",
];

document.addEventListener("keydown", (e) => {
  listAudio.map((audio, id) => {
    if (e.key.toUpperCase() === audio) {
      document.getElementById(audio).play();
      document.getElementById("display").innerText = audioName[id];
    }
  });
});

drumPad.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    console.log(e);
    listAudio.map((audio, id) => {
      if (idx === id) {
        document.getElementById(audio).play();
        document.getElementById("display").innerText = audioName[id];
      }
    });
  });
});
