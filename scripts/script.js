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

if((mins-(mins % 5)) / 5 === 0) {
  setAllBGtoWhite()
  var hoursPossibleArrays, minutesPossibleArrays
  hoursPossibleArrays = possibilities[hrs]
  minutesPossibleArrays = possibilities[(mins-(mins % 5)) / 5 ]
  // console.log(hours)
  // console.log(minutes, 'obtained from possibilities')
  var randomHourArray, randomMinuteArray
  randomHourArray = hoursPossibleArrays[Math.floor(Math.random() * hoursPossibleArrays.length)]
  randomMinuteArray = minutesPossibleArrays[Math.floor(Math.random() * minutesPossibleArrays.length)]
  console.log(randomHourArray, 'array of hour')
  for(let hourArea of randomHourArray) {
    var area = document.querySelector(`.${hourArea}`)
    area.style.backgroundColor = 'red'
  }
  console.log(randomMinuteArray, 'array of minute')
  for(let minuteArea of randomMinuteArray) {
    var area = document.querySelector(`.${minuteArea}`)
    area.style.backgroundColor = 'green'
  }

  var commonAreaArray = []
  var copy = [...randomMinuteArray]
  for(let hourArea of randomHourArray) {
    if(copy.length !== 0 && copy.indexOf(hourArea) !== -1) {
      commonAreaArray.push(hourArea)
      copy.splice(copy.indexOf(hourArea))
    }
  }

  for(commonArea of commonAreaArray) {
    let area = document.querySelector(`.${commonArea}`)
    area.style.backgroundColor = 'blue'
  }
}
