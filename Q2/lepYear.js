function leapYear(firstYear,secondYear) {
  
  let allYear = []

  while (firstYear <= secondYear) {
    allYear.push(firstYear)
    firstYear+=4
  }

  return allYear.join(',')
}

console.log(leapYear(1900,2020))