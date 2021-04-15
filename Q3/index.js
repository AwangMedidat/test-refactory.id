const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./profile_list.json', 'utf-8'))

//Number One
console.log('')
console.log("Users who don't have any phone numbers")
function findNotPhone(user) {
  
  for (let i = 0; i < user.length; i++) {
    let phoneNumber = user[i].profile.phones
    if (phoneNumber.length === 0) {
      console.log(user[i])
    }
  }

}

findNotPhone(data)


//Number Two
console.log('')
console.log('')
console.log("Users who have articles")
function findHaveArticle(user) {
  
  for (let i = 0; i < user.length; i++) {
    let articleUser = user[i].articles
    if (articleUser.length > 0) {
      console.log(user[i])
    }
  }
  
}

findHaveArticle(data)


//Number Three
console.log('')
console.log('')
console.log("Users who have 'annis' on their name")
function findNameAnnis(user) {
  
  for (let i = 0; i < user.length; i++) {
    let nameProfile = user[i].profile.full_name.toLowerCase()
    if (nameProfile === 'annisa') {
      console.log(user[i])
    }
  }
  
}

findNameAnnis(data)


//Number Four
console.log('')
console.log('')
console.log("Users who have articles on the year 2020")
function findYear2020(user) {
  
  for (let i = 0; i < user.length; i++) {
    let userArticle = user[i].articles
     for (let j = 0; j < userArticle.length; j++) {
       if(userArticle[j].published_at.slice(0,4) === '2020'){
        console.log(user[i])
       }
     }
  }
  
}

findYear2020(data)


//Number Five
console.log('')
console.log('')
console.log("Users who are born in 1986")
function findUserSameBorn(user) {
  
  for (let i = 0; i < user.length; i++) {
    let userBirth = user[i].profile.birthday.slice(0,4)
     if (userBirth === '1986') {
       console.log(user[i])
     }
  }
  
}

findUserSameBorn(data)


//Number Six
console.log('')
console.log('')
console.log("articles that contain 'tips' on the title")
function findTitleTips(user) {
  
  for (let i = 0; i < user.length; i++) {
    let articles = user[i].articles
     for (let j = 0; j < articles.length; j++) {
       let titleArticle = articles[j].title.toLowerCase()
       if (titleArticle.slice(0,4) === 'tips') {
         console.log(titleArticle)
       }
     }
  }
  
}

findTitleTips(data)


//Number Seven
console.log('')
console.log('')
console.log("articles published before August 2019")
function findPublishBeforeAugust(user) {
  
  for (let i = 0; i < user.length; i++) {
    let articles = user[i].articles
     for (let j = 0; j < articles.length; j++) {
       let publish = articles[j].published_at
       if (publish.slice(0,4) === '2019' && Number(publish.slice(6,7)) < 08) {
         console.log(articles[j])
       }
     }
  }
  
}

findPublishBeforeAugust(data)