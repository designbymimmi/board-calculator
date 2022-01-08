// General elements
const nextBtn = document.querySelector(".next-btn");
const returnBtn = document.querySelector(".return-btn");
const errorMessage = document.querySelector(".error-message");
const formHeading = document.querySelector("h2");
const currentStep = document.querySelector(".current-step");

// Select height elements
const metricLink = document.querySelector("#metric");
const imperialLink = document.querySelector("#imperial");

const inchesElement = document.querySelector(".inches");
const inchesInput = document.querySelector(".inches-input");

const heightSliderMetric = document.querySelector(".slider-metric");
const heightSliderImperial = document.querySelector(".slider-imperial");

const sliderCm = document.querySelector(".slider-cm");
const sliderFt = document.querySelector(".slider-ft");
const sliderInches = document.querySelector(".slider-inches");

const sliderCmDisplayValue = document.querySelector(".display-cm-value");
// Display slider value
sliderCmDisplayValue.innerText = sliderCm.value;

const sliderFtDisplayValue = document.querySelector(".display-ft-value");
// Display slider value
sliderFtDisplayValue.innerText = sliderFt.value;
const sliderInchesDisplayValue = document.querySelector(".display-inches-value");
// Display slider value
sliderInchesDisplayValue.innerText = sliderInches.value;

// Select weight elements
const sliderKg = document.querySelector(".slider-kg");
const sliderLbs = document.querySelector(".slider-lbs");

const sliderKgDisplayValue = document.querySelector(".display-kg-value");
sliderKgDisplayValue.innerText = sliderKg.value;
const sliderLbsDisplayValue = document.querySelector(".display-lbs-value");
sliderLbsDisplayValue.innerText = sliderLbs.value;

// Initialise metric as default choice
let metricTicked = true;

// ---------------------- STEP 1: Select Gender ----------------------------
// Grab gender and assign value to gender variable
const getGender = function() {
  let gender;
  if (document.querySelector("#woman").checked == true) {
    gender = "Women";
  } else if (document.querySelector("#man").checked == true) {
    gender = "Men";
  } else {
    errorMessage.innerText = "CHOOSE GENDER TO CONTINUE"
  }

  return gender;
}

// ----------------------- STEP 2: Select Height ----------------------------

// Show height metric and hide imperial options
const showMetric = function() {
  // Step 2: Height selection
  if (nextBtn.classList.contains("submit-height")) {
    if (heightSliderMetric.classList.contains("hide")){

      heightSliderMetric.classList.remove("hide");
      metricLink.classList.add("highlight");

      heightSliderImperial.classList.add("hide");
      imperialLink.classList.remove("highlight");
    }
  }
  // Step 3: Weight selection
  else if (nextBtn.classList.contains("submit-weight")) {
    if (document.querySelector(".slider-metric-weight").classList.contains("hide")) {

      document.querySelector(".slider-metric-weight").classList.remove("hide");
      metricLink.classList.add("highlight");

      document.querySelector(".slider-imperial-weight").classList.add("hide");
      imperialLink.classList.remove("highlight");
    }
  }
}

// Show height imperial and hide metric options
const showImperial = function() {
  // Step 2: Height selection
  if (nextBtn.classList.contains("submit-height")) {
    if (heightSliderImperial.classList.contains("hide")){

      heightSliderImperial.classList.remove("hide");
      imperialLink.classList.add("highlight");

      heightSliderMetric.classList.add("hide");
      metricLink.classList.remove("highlight");
    }
  }
  // Step 3: Weight selection
  else if (nextBtn.classList.contains("submit-weight")) {
    "This is where the code for hide/display weight option";
    if (document.querySelector(".slider-imperial-weight").classList.contains("hide")) {

      document.querySelector(".slider-imperial-weight").classList.remove("hide");
      imperialLink.classList.add("highlight");

      document.querySelector(".slider-metric-weight").classList.add("hide");
      metricLink.classList.remove("highlight");
    }
  }
}

// Show metric and hide imperial options
metricLink.addEventListener("click", function() {
  showMetric();

  // Make sure metric variable is set to true
  if (metricTicked === false) {
    metricTicked = true;
  }
});

// Show imperial and hide metric options
imperialLink.addEventListener("click", function() {
  showImperial();

  // Make sure metric variable is set to false
  if (metricTicked === true) {
    metricTicked = false;
  }
});

// Display Height slider values...
// ...cm
sliderCm.oninput = function() {
  sliderCmDisplayValue.innerText = this.value;
}
// ...ft
sliderFt.oninput = function() {
  sliderFtDisplayValue.innerText = this.value;
}
// ...inches
sliderInches.oninput = function() {
  sliderInchesDisplayValue.innerText = this.value;
}


// Grab height and assign value to height variable
const getHeight = function() {
  let height;
  if (!heightSliderMetric.classList.contains("hide")) {
    height = sliderCm.value;
  }
  if (!heightSliderImperial.classList.contains("hide")) {
    // Convert imperial height into metric cm
    height = Math.floor((sliderFt.value * 30.58) + (sliderInches.value * 2.54));
  }

  return height;
}

// ----------------------- STEP 3: Select Weight ----------------------------

// Display Weight slider values
sliderKg.oninput = function() {
  sliderKgDisplayValue.innerText = this.value;
}

sliderLbs.oninput = function() {
  sliderLbsDisplayValue.innerText = this.value;
}

const getWeight = function() {
  let weight;
  if (!document.querySelector(".slider-metric-weight").classList.contains("hide")) {
    weight = sliderKg.value;
  }
  if (!document.querySelector(".slider-imperial-weight").classList.contains("hide")) {
    // Convert lbs to kg and assign to weight
    weight = Math.floor(sliderLbs.value * 0.453592);
  }

  return weight;
}

// ---------------------- STEP 4: Select Skill Level  ----------------------------
// Grab skill level selected and assign value to skill level variable
const getSkillLevel = function() {
  let skillLevel;
  if (document.querySelector("#beginner").checked == true) {
    skillLevel = "beginner";
  } else if (document.querySelector("#intermediate").checked == true) {
    skillLevel = "intermediate";
  } else if (document.querySelector("#advanced").checked == true) {
    skillLevel = "advanced";
  } else {
    errorMessage.innerText = "CHOOSE SKILL LEVEL TO CONTINUE"
  }

  return skillLevel;
}

// ---------------------- STEP 5: Select Riding Style  ----------------------------

// Display riding style slider value...
// ...groomed runs
document.querySelector(".slider-slope").oninput = function() {
  if (this.value == 1) {
    document.querySelector(".display-slope-value").innerText = "Rarely";
  } else if (this.value == 2) {
    document.querySelector(".display-slope-value").innerText = "Sometimes";
  } else {
    document.querySelector(".display-slope-value").innerText = "A lot";
  }
}
// ...park
document.querySelector(".slider-park").oninput = function() {
  if (this.value == 1) {
    document.querySelector(".display-park-value").innerText = "Rarely";
  } else if (this.value == 2) {
    document.querySelector(".display-park-value").innerText = "Sometimes";
  } else {
    document.querySelector(".display-park-value").innerText = "A lot";
  }
}

// ...powder
document.querySelector(".slider-powder").oninput = function() {
  if (this.value == 1) {
    document.querySelector(".display-powder-value").innerText = "Rarely";
  } else if (this.value == 2) {
    document.querySelector(".display-powder-value").innerText = "Sometimes";
  } else {
    document.querySelector(".display-powder-value").innerText = "A lot";
  }
}

const getRidingStyle = function() {
  let ridingStyleSlope = document.querySelector(".slider-slope").value;
  let ridingStylePark = document.querySelector(".slider-park").value;
  let ridingStylePowder = document.querySelector(".slider-powder").value;

  return ridingStyleSlope, ridingStylePark, ridingStylePowder;
}

//--------------- Calculate and display Result functions --------------

// Calculate recommended board type
const calcBoardType = function(groomed, terrain, powder) {
  let ridingStyleResult;
  // freestyle board type
  if (terrain > powder && terrain > groomed) {
    ridingStyleResult = "freestyle";
  }
  // freeride board type
  else if (powder > terrain && powder > groomed) {
    ridingStyleResult = "freeride";
  }
  // all mountain board type
  else {
    ridingStyleResult = "all mountain";
  }

  return ridingStyleResult;
}

// Calculate board length
const calcBoardLength = function(height) {
  let boardLength;
  // Add to length if BMI on weight is 25 or over
  let bmi = weight / ((height/ 100) ** 2);
  if (bmi >= 25) {
      height += 4;
    }

  // calculate board length
  if (height < 152) {
    boardLength = 133;
  } else if (height < 158) {
    boardLength = 137;
  } else if (height < 163) {
    boardLength = 143;
  } else if (height < 168) {
    boardLength = 147;
  } else if (height < 173) {
    boardLength = 153;
  } else if (height < 178) {
    boardLength = 157;
  } else {
    boardLength = 160; //160+
  }

  // Add or remove length depending on skill level and style
  // Beginner
  if (skillLevel === 'beginner') {
    if (ridingStylePowder !== "freeride") {
      boardLength -= 4;
    }
  }
  // intermediate and advanced
  else {
    if (ridingStyleResult === "freeride") {
      boardLength += 4;
    }
    else if (ridingStyleResult === "freestyle") {
      boardLength -= 4;
    }
  }

  return boardLength;
}



const displayResult = function() {
  // display calculated results in string on website
  document.querySelector(".result-heading").innerText = `${gender}'s ${boardLength}cm ${skillLevel} ${ridingStyleResult} snowboard`;
}

const calcAndDisplayResult = function() {
  calcBoardType(ridingStyleSlope, ridingStylePark, ridingStylePowder);
  calcBoardLength(height);
  displayResult();
}


//--------------- Next step button --------------
// Submit user selections and hide/show previous/next step
nextBtn.addEventListener("click", function() {
  //----- Step 1 to 2 - gender to height ------
  if (nextBtn.classList.contains("submit-gender")) {
    getGender();

  // Only proceed if gender has been selected
  if (gender.length > 0) {
    // remove previous step and add next step class
    // to next btn to know where user is
    nextBtn.classList.remove("submit-gender");
    nextBtn.classList.add("submit-height");
    // Hide step 2 elements and display step 3
    document.querySelector(".gender-selection").classList.add("hide");
    document.querySelector("#attributes").classList.remove("hide");

    // Display return button
    returnBtn.classList.remove("hide");

    // Change headings and reset errorMessage
    formHeading.innerText = "What's your height?";
    currentStep.innerText = "2";
    errorMessage.innerText = "";
  }
  }

  //----- Step 2 to 3 - height to weight ------
  else if (nextBtn.classList.contains("submit-height")) {
    getHeight();
    // remove previous step and add next step class
    // to next btn to know where user is
    nextBtn.classList.remove("submit-height");
    nextBtn.classList.add("submit-weight");
    // Hide step 2 elements and display step 3
    document.querySelector(".height").classList.add("hide");
    document.querySelector(".weight").classList.remove("hide");
    // Hide conversion selector so height and weight follows the same format
    document.querySelector(".conversion-selector").classList.add("hide");

    // Change headings
    formHeading.innerText = "What's your weight?";
    currentStep.innerText = "3";

    // If imperial was chosen, make sure it's preset for next step
    // because metric is set as default display
    if (imperialLink.classList.contains("highlight")) {
      showImperial();
    }
  }

  //----- Step 3 to 4 - weight to skill level -----
  else if (nextBtn.classList.contains("submit-weight")) {
    getWeight();
    // remove previous step and add next step class
    // to next btn to know where user is
    nextBtn.classList.remove("submit-weight");
    nextBtn.classList.add("submit-level");
    // Hide step 3 elements and display step 4
    document.querySelector("#attributes").classList.add("hide");
    document.querySelector(".skill-level").classList.remove("hide");

    // Change headings
    formHeading.innerText = "What's your skill level?";
    currentStep.innerText = "4";
  }

  //----- Step 4 to 5 - skill level to riding style -------
  else if (nextBtn.classList.contains("submit-level")) {
    getSkillLevel();

    if (skillLevel.length > 0) {
      // remove previous step and add next step class
      // to next btn to know where user is
      nextBtn.classList.remove("submit-level");
      nextBtn.classList.add("submit-style");

      // Hide step 4 elements and display step 5
      document.querySelector(".skill-level").classList.add("hide");
      document.querySelector(".riding-style").classList.remove("hide");

      // Change headings
      formHeading.innerText = "What do you ride?";
      currentStep.innerText = "5";
      errorMessage.innerText = "";
      nextBtn.innerText = "See result";
  }
  }
  //------ Step 5 - Riding style to result ------
  else if (nextBtn.classList.contains("submit-style")) {
    getRidingStyle();
    // Calculate and display results
    calcAndDisplayResult();

    // Hide previous and show result elements
    document.querySelector(".riding-style").classList.add("hide");
    document.querySelector("header").classList.add("hide");
    document.querySelector(".result").classList.remove("hide");

    // Hide return and next buttons
    nextBtn.classList.add("hide");
    returnBtn.classList.add("hide");

    // Change headings
    formHeading.innerText = "Your recommended snowboard is a";
  }
});

//--------------- Return button --------------

returnBtn.addEventListener("click", function() {
  // Return from submit height to submit gender
  if (nextBtn.classList.contains("submit-height")) {
    // remove current step and add previous step class
    // to next btn to know where user is
    nextBtn.classList.remove("submit-height");
    nextBtn.classList.add("submit-gender");
    // Hide step 2 elements and display step 1
    document.querySelector(".gender-selection").classList.remove("hide");
    document.querySelector("#attributes").classList.add("hide");

    // Hide return button because user at step 1
    returnBtn.classList.add("hide");

    // Change headings and reset errorMessage
    formHeading.innerText = "What's your gender?";
    currentStep.innerText = "1";
  }

  // Return from submit weight to submit height
  else if (nextBtn.classList.contains("submit-weight")) {
    // remove current step and add previous step class
    // to next btn to know where user is
    nextBtn.classList.add("submit-height");
    nextBtn.classList.remove("submit-weight");
    // Hide weight elements and display height
    document.querySelector(".height").classList.remove("hide");
    document.querySelector(".weight").classList.add("hide");
    // Hide conversion selector so height and weight follows the same format
    document.querySelector(".conversion-selector").classList.remove("hide");

    // Change headings
    formHeading.innerText = "What's your height?";
    currentStep.innerText = "2";
  }

  // Return from submit skill level to submit weight
  else if (nextBtn.classList.contains("submit-level")) {
    // remove current step and add previous step class
    // to next btn to know where user is
    nextBtn.classList.add("submit-weight");
    nextBtn.classList.remove("submit-level");
    // Hide step 3 elements and display step 4
    document.querySelector("#attributes").classList.remove("hide");
    document.querySelector(".skill-level").classList.add("hide");

    // Change headings
    formHeading.innerText = "What's your weight?";
    currentStep.innerText = "3";
  }

  // Return from submit skill level to submit weight
  else if (nextBtn.classList.contains("submit-style")) {
    // remove current step and add previous step class
    // to next btn to know where user is
    nextBtn.classList.add("submit-level");
    nextBtn.classList.remove("submit-style");

    // Hide step 4 elements and display step 5
    document.querySelector(".skill-level").classList.remove("hide");
    document.querySelector(".riding-style").classList.add("hide");

    // Change headings
    formHeading.innerText = "What's your skill level?";
    currentStep.innerText = "4";
    errorMessage.innerText = "";
    nextBtn.innerText = "Next step";
  }
});
