const aboutMe = document.querySelector ("#about")
const projects = document.querySelector("#project")
const aboutContent = document.querySelector("#about-content")
const projectsContent = document.querySelector("#projects-content")


aboutMe.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    modal: true,
    width: '70%',
    height: '100%',
    /*
    top: "25%",
    right: 50,
    bottom: 50,
    */
    x: "center",
    y: "center",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#332F2E")
    },
    fullscreen: function(){

      winbox.fullscreen(!this.full);
  },
    // remove modal true, to use onBlur function, hadii kle ma arki doontid effect of oblur funcion
    /*
    onblur: function () {
      this.setBackground('#999999')
    },*/
  })
})




projects.addEventListener('click', () => {
  const projectBox = new WinBox({
    title: 'Projects',
    modal: true,
    // remove modal true , hadii adan rabin in screen ka dhan uu qabsado 
    width: '370px',
    height: '370px',

    /*top: "30%",
    right: 50,
    bottom: 50,*/
    x: "center",
    y: "center",
    mount: projectsContent,
    onfocus: function () {
      this.setBackground("#332F2E")
    },
    onblur: function () {
      this.setBackground("#999999")
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

console.log("                         ______                     \r\n _________        .---\"\"\"      \"\"\"---.              \r\n:______.-\':      :  .--------------.  :             \r\n| ______  |      | :                : |             \r\n|:______B:|      | |  Little secret:| |             \r\n|:______B:|      | |                | |             \r\n|:______B:|      | |  I GOOGLE  A   | |             \r\n|         |      | |  LOT.          | |             \r\n|:_____:  |      | |                | |             \r\n|    ==   |      | :                : |             \r\n|       O |      :  \'--------------\'  :             \r\n|       o |      :\'---...______...---\'              \r\n|       o |-._.-i___\/\'             \\._              \r\n|\'-.____o_|   \'-.   \'-...______...-\'  `-._          \r\n:_________:      `.____________________   `-.___.-. \r\n                 .\'.eeeeeeeeeeeeeeeeee.\'.      :___:\r\n    fsc        .\'.eeeeeeeeeeeeeeeeeeeeee.\'.         \r\n              :____________________________:%c\r\n\r\n\uD835\uDC37\uD835\uDC5C \uD835\uDC66\uD835\uDC5C\uD835\uDC62 \uD835\uDC58\uD835\uDC5B\uD835\uDC5C\uD835\uDC64 \uD835\uDC61\u210E\uD835\uDC56\uD835\uDC60 \uD835\uDC5D\uD835\uDC4E\uD835\uDC54\uD835\uDC52 \uD835\uDC60\uD835\uDC61\uD835\uDC5C\uD835\uDC5F\uD835\uDC52\uD835\uDC60 \uD835\uDC66\uD835\uDC5C\uD835\uDC62\uD835\uDC5F \uD835\uDC5D\uD835\uDC5F\uD835\uDC52\uD835\uDC53\uD835\uDC52\uD835\uDC5F\uD835\uDC5F\uD835\uDC52\uD835\uDC51 \uD835\uDC4F\uD835\uDC4E\uD835\uDC50\uD835\uDC58\uD835\uDC54\uD835\uDC5C\uD835\uDC62\uD835\uDC5B\uD835\uDC51 \uD835\uDC50\uD835\uDC5C\uD835\uDC59\uD835\uDC5C\uD835\uDC5F?\r\n\uD835\uDC61\uD835\uDC5C \uD835\uDC50\u210E\uD835\uDC52\uD835\uDC50\uD835\uDC58 \uD835\uDC56\uD835\uDC61, \uD835\uDC50\u210E\uD835\uDC4E\uD835\uDC5B\uD835\uDC54\uD835\uDC52 \uD835\uDC61\u210E\uD835\uDC52 \uD835\uDC4F\uD835\uDC4E\uD835\uDC50\uD835\uDC58\uD835\uDC54\uD835\uDC5F\uD835\uDC5C\uD835\uDC62\uD835\uDC5B\uD835\uDC51 \uD835\uDC50\uD835\uDC5C\uD835\uDC59\uD835\uDC5C\uD835\uDC5F \uD835\uDC4E\uD835\uDC5B\uD835\uDC51 \uD835\uDC5F\uD835\uDC52\uD835\uDC59\uD835\uDC5C\uD835\uDC4E\uD835\uDC51 \uD835\uDC61\u210E\uD835\uDC52 \uD835\uDC5D\uD835\uDC4E\uD835\uDC54\uD835\uDC52")