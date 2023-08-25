"use strict";
import "./style.css";

let selectedTopic;
let selectNoOfQuestion;
let selectChoiceQuestion;

const popup = document.getElementById("popup");
const quizPopupDiv = document.getElementById("quiz-popup");
const quizclosePopup = document.getElementById("closePopup");
const selectQuiz = document.getElementById("selectQuiz");
const selectNuQuesiton = document.getElementById("noOfQuestion");
const selectChoice = document.getElementById("questionChoice");
const submitBtn = document.getElementById("submit");

function showPopup() {
  console.log("popup is open");
  popup.style.display = "block";
}

function closePopup() {
  console.log("popup is closed");
  popup.style.display = "none";
}

function handleMultiple() {
  console.log(multipleBtn.value);
}

function handleSubmit() {
  selectedTopic = selectQuiz.value;
  selectNoOfQuestion = selectNuQuesiton.value;
  selectChoiceQuestion = selectChoice.value;

  localStorage.setItem("topic", selectQuiz.value);
  localStorage.setItem("no-of-question", selectNuQuesiton.value);
  localStorage.setItem("choice-question", selectChoice.value);

  console.log(
    "submit data is  ",
    selectedTopic,
    selectNoOfQuestion,
    selectChoiceQuestion
  );
}

quizPopupDiv.addEventListener("click", showPopup);
quizclosePopup.addEventListener("click", closePopup);
submitBtn.addEventListener("click", handleSubmit);
