let side = 0

document.getElementById('calculate').addEventListener('click', areaofsquare)

function areaofsquare () {
  side = document.getElementById('side').value

  side = parseInt(side)

  area = side * side

  alert(area)
}
