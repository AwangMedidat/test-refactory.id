const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./inventory_list.json', 'utf-8'))


//Number One
console.log('')
console.log("items in the Meeting Room")
function findItemInMeetRoom(item) {
  
  for (let i = 0; i < item.length; i++) {
    if (item[i].placement.name === 'Meeting Room') {
      console.log(item[i])
    }
  }

}

findItemInMeetRoom(data)



//Number Two
console.log('')
console.log('')
console.log("all electronic devices")
function findAllElectronic(item) {
  
  for (let i = 0; i < item.length; i++) {
    if (item[i].type === 'electronic') {
      console.log(item[i])
    }
  }

}

findAllElectronic(data)


//Number Three
console.log('')
console.log('')
console.log("all the furniture")
function findAllFurniture(item) {
  
  for (let i = 0; i < item.length; i++) {
    if (item[i].type === 'furniture') {
      console.log(item[i])
    }
  }

}

findAllFurniture(data)


//Number Four
console.log('')
console.log('')
console.log("all items were purchased on 16 Januari 2020")
function findAllItemTimeSame(item) {
  
  for (let i = 0; i < item.length; i++) {
    if (item[i].purchased_at === '16/01/2020') {
      console.log(item[i])
    }
  }

}

findAllItemTimeSame(data)


//Number Five
console.log('')
console.log('')
console.log("all items with brown color")
function findItemBrownColor(item) {
  
  for (let i = 0; i < item.length; i++) {
    if (item[i].tags[2] === 'brown') {
      console.log(item[i])
    }
  }

}

findItemBrownColor(data)