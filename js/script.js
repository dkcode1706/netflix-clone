// let lang = document.getElementsByClassName("lan")

// lang[0].innerHTML = " ";

// functionlity for scroll .

let btn_left = document.getElementById("left-scroll")
let btn_right = document.getElementById("right-scroll")
let grid_cont = document.getElementById("top-movie")

btn_left.addEventListener("click", () => {
    grid_cont.scrollBy({
        left: -1200,
        behavior: "smooth"
    })
})

btn_right.addEventListener("click", () => {
    grid_cont.scrollBy({
        left:1200,
        behavior: "smooth"
    })
})

// plus img

let plus_img = [];
const degree = 45;
const normal_degree = 0;

// importing img

for(let i = 0; i<6; i++){
    plus_img.push(document.getElementById(`p-${i}`))
}


// importing  faq;

let q_1 = document.getElementById("q-0");
let que = [];  // geting faq questions.
let ans = []; // getting ans.

for(let i = 0; i<6; i++ ){
    que.push(document.getElementById(`q-${i}`))
}
for(let i = 0; i<6; i++ ){
    ans.push(document.getElementById(`a-${i}`))
}

console.log(que)
console.log(ans)

// display function
function faq_fun(i){

    ans.forEach((ans, i)=>{
        ans.classList.remove("q-a")
        plus_img[i].classList.remove("a-img")
    })


    ans[i].classList.toggle("q-a")
   
    plus_img[i].classList.toggle("a-img")

}

// caling function

for(let i = 0; i<que.length;i++){
    que[i].addEventListener("click",() => faq_fun(i));
}


