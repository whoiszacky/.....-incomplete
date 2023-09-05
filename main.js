const aboutMe = document.querySelector ("#about")
const projects = document.querySelector("#project")
const aboutContent = document.querySelector("#about-content")
const projectsContent = document.querySelector("#projects-content")


aboutMe.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '370px',
    height: '370px',
    top: "25%",
    right: 50,
    bottom: 50,
    left: "50%",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#a52727')
    },
    onblur: function () {
      this.setBackground('#e27865')
    },
  })
})


projects.addEventListener('click', () => {
  const projectBox = new WinBox({
    title: 'Projects',
    // modal: true,
    width: '370px',
    height: '370px',
    top: "30%",
    right: 50,
    bottom: 50,
    left: "60%",
    mount: projectsContent,
    onfocus: function () {
      this.setBackground('#a52727')
    },
    onblur: function () {
      this.setBackground('#e27865')
    },
  })
})


// user colorchnger //
// Select the color picker and body elements
let colorpicker = document.querySelector(".colorchnger input");
let bodyTag = document.querySelector("body");

// Function to update the background color and save it in localStorage
function updateColor() {
  let selectedColor = colorpicker.value;
  bodyTag.style.backgroundColor = selectedColor;
  
  // Save the selected color in localStorage
  localStorage.setItem("userSelectedColor", selectedColor);
}

// Add an event listener to the color picker to update the color and save it
colorpicker.addEventListener("input", updateColor);

// Load the user's selected color when the page loads
window.onload = function () {
  // Retrieve the user's selected color from localStorage
  let savedColor = localStorage.getItem("userSelectedColor");

  // Check if a color was previously saved
  if (savedColor) {
    // Update the color picker and background color
    colorpicker.value = savedColor;
    bodyTag.style.backgroundColor = savedColor;
  }
};
