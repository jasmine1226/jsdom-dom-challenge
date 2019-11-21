// A Counter that increases by 1 each second

let sec = 0;
let el = document.getElementById("counter");

function counter() {
  sec++;
  el.innerText = sec;
  displayLikes();
  likes = 0;
}

let timer = setInterval(counter, 1000);

// Plus and Minus buttons that increment or decrement the counter

document.addEventListener("click", function(e) {
  if (e.target.id == "plus") {
    sec++;
    el.innerText = sec;
  } else if (e.target.id == "minus") {
    sec--;
    el.innerText = sec;
  }
});

// A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
let likes = 0;

document.addEventListener("click", function(e) {
  if (e.target.id == "heart") {
    likes++;
  }
});

// A comment box that adds comments when submitted

function displayLikes() {
  if (likes != 0) {
    let p = document.createElement("p");
    p.innerText = `${sec} has ${likes} like(s).`;
    let list = document.getElementById("list");
    list.appendChild(p);
  }
}

// pause button that pauses the counter and disable all buttons

document.addEventListener("click", function(e) {
  if (e.target.id == "pause") {
    pause(e);
  }
});

let is_paused = false;

function pause(e) {
  if (is_paused == false) {
    clearInterval(timer);
    is_paused = true;
    e.target.innerText = "resume";
    disableButtons();
  } else {
    timer = setInterval(counter, 1000);
    is_paused = false;
    e.target.innerText = "pause";
    enableButtons();
  }
}

function disableButtons() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(disable);

  function disable(b) {
    if (b.id != "pause") {
      b.disabled = true;
    }
  }
}

// When 'resume' is clicked, it should restart the counter and re-enable the buttons.

function enableButtons() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(enable);

  function enable(b) {
    if (b.id != "pause") {
      b.disabled = false;
    }
  }
}

// user can leave comments

document.addEventListener("submit", function(e) {
  e.preventDefault();
  let text = document.getElementById("comment-input").value;
  let p = document.createElement("p");
  p.innerText = text;
  let list = document.getElementById("list");
  list.appendChild(p);
});
