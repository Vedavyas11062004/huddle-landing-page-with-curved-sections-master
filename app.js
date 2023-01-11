const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entered !");
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const select=document.querySelectorAll(".hidden");
select.forEach((ele)=>{
    observer.observe(ele)
})
