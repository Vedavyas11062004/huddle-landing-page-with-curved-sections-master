const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entered !");
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.add("show");
    }
  });
});

const select = document.querySelectorAll(".hidden");
select.forEach((ele) => {
  observer.observe(ele);
});

const email = document.getElementById("email");
const submit = document.getElementById("submit");
const errorMsg = document.getElementById("error");
const form=document.querySelector('form')
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
  let msg = [];
  if (email.value===''|| email.value==null) {
    msg.push('Email is reqiured');
  }
  if (email.value !== validRegex) {
    msg.push('Check your email please')
  }
  if (msg.length > 0) {
    e.preventDefault();
    errorMsg.innerText = msg.join(",");
  }
});
