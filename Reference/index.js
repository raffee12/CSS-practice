
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");

const second = document.querySelector(".second");

const updatingClock = ()=> {
  const date = new Date()
setTimeout(updatingClock, 1000)


const theHour = date.getHours()
const hourDeg = (theHour / 12) * 360
hour.style.transform = `rotate(${hourDeg}deg)`
const theMin = date.getMinutes()
const minDeg = (theMin / 60) * 360
min.style.transform = `rotate(${minDeg})`
const theSec = date.getSeconds()
const secDeg = (theSec / 60)*360
second.style.transform = `rotate(${secDeg}deg)`

}
updatingClock()
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRndInteger(1,6))

const students = ['Sumit', 'Rafiza', 'Akash', 'Raffee', 'Daniyal', 'Josh']
console.log(students
  .sort())

  console.log(students)

const rollNumber = [12,30, 40,06, 07,09]

rollNumber.sort((a,b)=> {
   return a - b
})
console.log(rollNumber)


const leapYear = (year)=> {
    return (year % 400 ==0 || (year % 4 ==0 &&(year % 100 !=0)))
}

console.log(`My year is ${leapYear(2016)}`)

const vowels = ['a', 'e', 'i', 'o', 'u']


const myFunc = (sen)=> {
  let count = 0;
  const arr= Array.from(sen)
  arr.forEach((value)=> {
  if(vowels.includes(value)){
    count++
  }
  
  })
   return count
}
console.log(myFunc('I am foolishly patient, My life bad some want'))

const dublicate = [10, 20, 10, 9, 8,9,7, 9]

const thisFunc= dublicate.filter((value, index, array)=> {
 return array.indexOf(value) !== index
})
console.log(thisFunc)
const songs = {name:'Daniel Zee', album: 'One', releaseDate: 2021}
for (var x in songs){
  console.log(x)
}

const num = [12, 3, 56, 70, 60]
let write = 'Doing'

for (let n in num){
    write += num[n]
    console.log(num[n])
}
  
console.log(write)
let i =0

let txt = ''

while(i <=30){
  txt += 'My things are ' +  i;
  i++;
  // for (let vividus of i){
  //   console.log(vividus)
  // }  
  console.log(i)
}


let con = 3
if(con > 5){
  console.log('Tiny')
} else if(con > 10){
  console.log('Small')
} else if(con > 15){
  console.log('Medium')
} else if(con < 20 ){
  console.log('Large')
}  else if(con >= 20){
  console.log('Huge')
} else {
  console.log('Not matches')
}
