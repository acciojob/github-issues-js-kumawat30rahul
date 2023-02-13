let pageNumber = document.getElementById('page_number')
let next = document.getElementById('load_next')
let prev = document.getElementById('load_prev')
let issueName = document.getElementById('issuName')


let pageNumberHere = 1;

next.addEventListener("click",() => {
    ++pageNumberHere;
    if(pageNumberHere > 5){
        pageNumberHere = 5
    }
    updatingPageNumber(pageNumberHere)
    

})
prev.addEventListener("click",() => {
            
    if(pageNumberHere>1){
        pageNumberHere--;
    }
    updatingPageNumber(pageNumberHere)


})
function updatingPageNumber(pageNumberHere){
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`)
    .then(response => response.json())
    .then((data) => {
        let issues  = data
        issueName.innerText = ""
        issues.forEach(issue => {
            let li = document.createElement('li')
            li.innerText = issue.title
            issueName.appendChild(li)

        })
        pageNumber.innerText = `Page Number ${pageNumberHere}`;
        
    })

}
updatingPageNumber(pageNumberHere)


//============>>>>>>>>>>>>>>>>>suprioyasoynfg<<<<<<<<<<<<<<<<<<<<========================================//
// let pageNumber = 1;

// document.getElementById("load_next").addEventListener("click", function() {
//   pageNumber++;
//   updatePage(pageNumber);
// });

// document.getElementById("load_prev").addEventListener("click", function() {
//   if (pageNumber > 1) {
//     pageNumber--;
//     updatePage(pageNumber);
//   }
// });

// function updatePage(pageNumber) {
//   fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
//     .then(response => response.json())
//     .then(data => {
//       let issueList = document.getElementById("issue_list");
//       issueList.innerHTML = "";
//       data.forEach(function(issue) {
//         let listItem = document.createElement("li");
//         listItem.innerText = issue.title;
//         issueList.appendChild(listItem);
//       });
//       document.getElementById("page_number").innerText = `Page Number ${pageNumber}`;
//     });
// }

// updatePage(pageNumber);
