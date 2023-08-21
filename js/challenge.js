document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const likesList = document.querySelector(".likes");
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("list");
  
    let count = 0;
    let interval = setInterval(incrementCounter, 1000);
    let likeCounts = {};
  
    function incrementCounter() {
      count++;
      counter.innerText = count;
    }
  
    plusButton.addEventListener("click", () => {
      count++;
      counter.innerText = count;
    });
  
    minusButton.addEventListener("click", () => {
      count--;
      counter.innerText = count;
    });
  
    heartButton.addEventListener("click", () => {
      if (likeCounts[count]) {
        likeCounts[count]++;
      } else {
        likeCounts[count] = 1;
      }
  
      likesList.innerHTML = "";
      for (let number in likeCounts) {
        const li = document.createElement("li");
        li.innerText = `${number} has ${likeCounts[number]} likes`;
        likesList.appendChild(li);
      }
    });
  
    pauseButton.addEventListener("click", () => {
      if (pauseButton.innerText === "pause") {
        clearInterval(interval);
        pauseButton.innerText = "resume";
        disableButtons();
      } else {
        interval = setInterval(incrementCounter, 1000);
        pauseButton.innerText = "pause";
        enableButtons();
      }
    });
  
    commentForm.addEventListener("submit", event => {
      event.preventDefault();
      const commentInput = document.getElementById("comment-input");
      const comment = commentInput.value;
      const commentElement = document.createElement("p");
      commentElement.innerText = comment;
      commentList.appendChild(commentElement);
      commentInput.value = "";
    });
  
    function disableButtons() {
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
    }
  
    function enableButtons() {
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
    }
  });
  