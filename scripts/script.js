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

function setGoldenRectangle() {
  var goldenRectangle = document.querySelector('.goldenRectangle')
  goldenRectangle.style.width = '51.4%'
  var width = 0.514 * window.innerWidth
  goldenRectangle.style.height = `${0.61803 * width}`
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
}

function setAllBGtoGrey() {
  var gridAreas = document.querySelectorAll('.children')
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
  setAllBGtoGrey()
  getHoursMinutes()
  var hoursPossibleArrays = [], minutesPossibleArrays = []
  hoursPossibleArrays = possibilities[hrs]
  minutesPossibleArrays = possibilities[(mins-(mins % 5)) / 5 ]

  var randomHourArray = [], randomMinuteArray = []
  randomHourArray = hoursPossibleArrays[Math.floor(Math.random() * hoursPossibleArrays.length)]
  randomMinuteArray = minutesPossibleArrays[Math.floor(Math.random() * minutesPossibleArrays.length)]

  colorSpecificAreas(randomMinuteArray, 'rgb(0,255,0)')
  colorSpecificAreas(randomHourArray, 'red')
  var commonAreaArray = computeCommonAreas(randomHourArray, randomMinuteArray)

  var commonArea
  for(commonArea of commonAreaArray) {
    var area = document.querySelector(`.${commonArea}`)
    if(area !== null)
    area.style.backgroundColor = 'blue'
  }
}

function entryPoint() {
  setGoldenRectangle()
  colorAreas()
}

entryPoint()
setInterval(() => entryPoint(), 300000)

window.onresize = entryPoint
