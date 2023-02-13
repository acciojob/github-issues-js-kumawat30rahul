let pageNumber = document.getElementById('pageNumber')
let next = document.getElementById('load_next')
let prev = document.getElementById('load_prev')
let issueName = document.getElementById('issuName')

fetch('https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5')
    .then(response => response.json())
    .then((data) => {
        let issues  = data

        let y = 0;
        issueName.innerText = issues[y].title;

        let x = 1;
        
        if(x < 1){
            x = 1;
        }
        pageNumber.innerText = x;
        next.addEventListener("click",() => {
            y++;
            ++x;
            if(x > issues.length){
                x = issues.length
            }
            issueName.innerText = issues[y].title;
            pageNumber.innerText = x;

        })
        prev.addEventListener("click",() => {
            if(y>0){
                y--;
            }
            if(x>1){
                x--;
            }
            issueName.innerText = issues[y].title;
            pageNumber.innerText = x;

        })
    })
