function displayWorkout(response) {
  console.log("workout generated");
  new Typewriter("#workout-split", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    curser: "",
  });
}

function generateWorkout(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ce89a5b084t4180e11b02bocfa29d243";
  let context =
    "You are a fitness trainer expert and love to help people with their fitness goals. Your mission is to generate 5 to 6 exercises with reps based on the muscle group wanting to work on. Please provide answer in basic HTML. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a workout split based on ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let workoutElement = document.querySelector("#workout-split");
  workoutElement.classList.remove("hidden");

  workoutElement.innerHTML = `<div class="generating">⌛Generating split for a ${instructionsInput.value} workout..</div>`;

  console.log("Generating workout");
  console.log(`prompt: is ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayWorkout);
}

let workoutFormElement = document.querySelector("#workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);
