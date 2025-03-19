function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("animation-scroll");
    }
  });
}

let options = {
  threshold: [0.01],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

console.log(elements)