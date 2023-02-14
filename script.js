let page = document.getElementById('page_number')
let list = document.getElementById('issue_list')
let nextbutton = document.getElementById('load_next')
let prevbutton = document.getElementById('load_prev')


let pageNumbers = 1;
nextbutton.addEventListener("click",() => {
  pageNumbers++;
  if(pageNumbers>5){
    pageNumbers = 5
  }
  updateUser(pageNumbers)
})

prevbutton.addEventListener("click",() => {
  if(pageNumbers>1){
    pageNumbers--;
  }
  updateUser(pageNumbers)
})



function updateUser(pageNumber){
  fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then(response => response.json())
    .then(data => {
       page.innerText = `Page number ${pageNumber}`
       list.innerHTML = ""

        data.map(issue => {
          console.log(issue);
          let stringRandom = randomNumber()
          console.log(stringRandom);
          let olLists = document.createElement('li')
          olLists.innerText = issue.title + stringRandom
          list.appendChild(olLists)
        })
    })
}

updateUser(pageNumbers)

function randomNumber(){
  let string = ""
  let characters = "sdjfasliudgfbrgnvkjsiugd"
  
  for(let i = 0;i<3;i++){
    let number = Math.floor(Math.random()*24)
    string += characters.charAt(number)
  }
  return string
}
