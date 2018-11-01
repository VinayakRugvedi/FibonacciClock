var timeInfo = new Date(), hrs, mins
const possibilities = {
  0 : [[]],
  1 : [["oneTop"]],
  2 : [["oneTop", "oneDown"], ["two"]],
  3 : [["oneTop", "two"], ["three"]],
  4 : [["oneTop", "oneDown", "two"], ["oneTop", "three"]],
  5 : [["oneTop", "oneDown", "three"], ["two", "three"], ["five"]],
  6 : [["oneTop", "five"], ["oneTop", "two", "three"]],
  7 : [["oneTop", "oneDown", "five"], ["oneTop", "oneDown", "two", "three"], ["two", "five"]],
  8 : [["oneTop", "two", "five"], ["three", "five"]],
  9 : [["oneTop", "three", "five"], ["oneTop", "oneDown", "two", "five"]],
  10 : [["oneTop", "oneDown", "three", "five"], ["two", "three", "five"]],
  11 : [["oneTop", "two", "three", "five"]],
  12 : [["oneTop", "oneDown", "two", "three", "five"]],
}

function getHoursMinutes() {
  if(timeInfo.getHours() > 12) {
    hrs = timeInfo.getHours() - 12
  }
  else {
    if(timeInfo.getHours() === 0)  hrs = timeInfo.getHours() + 12
    else hrs = timeInfo.getHours()
  }
  mins = timeInfo.getMinutes()
  console.log(hrs,mins)
}

function setAllBGtoWhite() {
  var gridAreas = document.querySelectorAll('.children')
  console.log(gridAreas )
  for(let area of gridAreas) {
    area.style.backgroundColor = 'grey'
  }
}

function colorSpecificAreas(areasArray, color) {
  for(let area of areasArray) {
    var thisArea = document.querySelector(`.${area}`)
    thisArea.style.backgroundColor = color
  }
}

function computeCommonAreas(randomHourArray, randomMinuteArray) {
  var commonAreaArray = []
  var copy = [...randomMinuteArray]
  for(let hourArea of randomHourArray) {
    if(copy.length !== 0 && copy.indexOf(hourArea) !== -1) {
      commonAreaArray.push(hourArea)
      copy.splice(copy.indexOf(hourArea), 1)
    }
  }
  return commonAreaArray
}

function colorAreas() {
  setAllBGtoWhite()
  getHoursMinutes()
  var hoursPossibleArrays = [], minutesPossibleArrays = []
  hoursPossibleArrays = possibilities[hrs]
  minutesPossibleArrays = possibilities[(mins-(mins % 5)) / 5 ]
  console.log(hoursPossibleArrays, 'hoursPossibleArrays')

  var randomHourArray = [], randomMinuteArray = []
  randomHourArray = hoursPossibleArrays[Math.floor(Math.random() * hoursPossibleArrays.length)]
  randomMinuteArray = minutesPossibleArrays[Math.floor(Math.random() * minutesPossibleArrays.length)]

  console.log(randomHourArray, 'array of hour')
  colorSpecificAreas(randomMinuteArray, 'green')
  colorSpecificAreas(randomHourArray, 'red')
  console.log(randomMinuteArray, 'array of minute')
  // colorSpecificAreas(randomMinuteArray, 'green')
  var commonAreaArray = computeCommonAreas(randomHourArray, randomMinuteArray)
  // var copy = [...randomMinuteArray]
  // for(let hourArea of randomHourArray) {
  //   if(copy.length !== 0 && copy.indexOf(hourArea) !== -1) {
  //     commonAreaArray.push(hourArea)
  //     copy.splice(copy.indexOf(hourArea), 1)
  //   }
  // }
  console.log(commonAreaArray, 'commcon')
  var commonArea
  // = commonAreaArray[Math.floor(Math.random() * commonAreaArray.length)]
  for(commonArea of commonAreaArray) {
    var area = document.querySelector(`.${commonArea}`)
    if(area !== null)
    area.style.backgroundColor = 'blue'
  }
}

colorAreas()
// getHoursMinutes()
if((mins-(mins % 5)) / 5 === 0) {
  colorAreas()
}
