// SET THE YEAR UP TO DATE
const spanYear = document.querySelector(".footer-year");

const curYear = new Date().getFullYear();
spanYear.textContent = curYear;

// TOGGLE NAV
const containerHeader = document.querySelector(".main-header");
const btnMenu = document.querySelector(".menu-icon-mobile");

btnMenu.addEventListener("click", function () {
  containerHeader.classList.toggle("open-nav");
});

// STICKY NAV
const sectionHero = document.getElementById("hero");
console.log(sectionHero.scrollHeight);

const obs = new IntersectionObserver(
  function ([entries]) {
    if (!entries.isIntersecting) document.body.classList.add("sticky");
    if (entries.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0, // SECTION GET OUT FROM VIEWPORT
    rootMargin: "-80px",
  }
);

obs.observe(sectionHero);

// SCROLL SMOOTH ON ALL ANCORS
document.addEventListener("click", (e) => {
  e.preventDefault();
  const ancor = e.target.closest("a:link");
  // GUARD CLAUSE
  if (!ancor) return;

  const href = ancor.getAttribute("href");

  if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

  if (href !== "#") {
    const id = href.slice(1);
    document.getElementById(`${id}`).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
