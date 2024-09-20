function generateWorkout(event) {
  event.preventDefault();
  let workoutElement = document.querySelector("#workout-split");

  new Typewriter("#workout-split", {
    strings: "Bent-over rows with barbell",
    autoStart: true,
    delay: 1,
    curser: "",
  });
}

let workoutFormElement = document.querySelector("#workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);
