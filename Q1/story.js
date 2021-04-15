let restoName = 'Warung Makan Sederhana'
let datePrint = new Date()
let cashierName = 'Awang Medidat'
let dish =[
  ['Nasi',5000],
  ['Lauk',10000],
  ['Minum',5000]
]
let total = 0

console.log('   '+restoName)
console.log(' ')
console.log(`Tanggal : ${datePrint.getDate()}/${datePrint.getMonth()}/${datePrint.getFullYear()}  ${datePrint.getHours()}:${datePrint.getMinutes()}:${datePrint.getSeconds()}`)
console.log(' ')
console.log(`Nama Kasir : ${cashierName}`)
console.log(' ')
console.log('==============================')
console.log(' ')
for (let i = 0; i < dish.length; i++) {
  console.log(`${dish[i][0]}.................Rp${dish[i][1]}`)
  total+=Number(dish[i][1])
}
console.log('')
console.log('')
console.log(`Total.................Rp${total}`)
