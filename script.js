let side = 0
let area = side * side

// This is a code for the button:
document.getElementById('calculate').addEventListener('click', areaofsquare)

function areaofsquare () {
  side = document.getElementById('side').value
  side = parseInt(side)
  area = side * side // This is the calculation of the area of square
  alert(area)
}
