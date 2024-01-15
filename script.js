let lightTheme = true;

const themeButton = document.querySelector("#theme-toggle");
console.log('Before: ', lightTheme);
themeButton.addEventListener("click", () => {
  lightTheme = !lightTheme;
  console.log('After: ', lightTheme);
  if (!lightTheme) {
    document.body.style.backgroundColor = "black";
  }else{
    document.body.style.backgroundColor = "rgb(163, 222, 212)";
  }
});
