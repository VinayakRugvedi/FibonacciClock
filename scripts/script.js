var timeInfo = new Date(), hrs, mins
const possibilities = {
  1 : ["oneTop"],
  2 : [["oneTop", "oneDown"], ["two"]],
  3 : [["oneTop", "two"], ["three"]],
  4 : [["oneTop", "oneDown", "two"], ["oneTop", "three"]],
  5 : [["oneTop", "oneDown", "three"], ["two", "three"], ["five"]],
  6 : [["oneTop", "five"], ["oneTop", "two", "three"]],
  7 : [["oneTop", "oneDown", "five"], ["oneTop", "oneDown", "two", "three"], ["two", "five"]],
  8 : [["oneTop", "two", "five"], ["three", "five"]],
  9 : [["oneTop", "three", "five"], ["oneTop", "oneDown", "two", "five"]],
  10 : [["oneTop", "oneDown", "three", "five"], ["two", "three", "five"]],
  11 : ["oneTop", "two", "three", "five"],
  12 : ["oneTop", "oneDown", "two", "three", "five"]
}

if(timeInfo.getHours() > 12) {
  hrs = timeInfo.getHours() - 12
}
else {
  if(timeInfor.getHours === 0)  hrs = timeInfo.getHours() + 12
  else hrs = timeInfo.getHours()
}
mins = timeInfo.getMinutes()

function setAllBGtoWhite() {
  var gridAreas = document.querySelectorAll('.children')
  console.log(gridAreas )
  for(let area of gridAreas) {
    area.style.backgroundColor = 'grey'
  }
}
