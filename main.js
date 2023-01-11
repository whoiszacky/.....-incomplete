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

const colorpicker = document.querySelector (".colorchnger input")
const bodyTag = document.querySelector("body")

colorpicker.addEventListener("input", function () {
  bodyTag.style.backgroundColor = colorpicker.value
})