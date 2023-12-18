const star_container=document.querySelector(".container")
const star_numbers=document.querySelectorAll(".numbers")
const click_number=document.querySelector("#added_number")
const btn=document.querySelector("#click_btn")
const Thank_wrapper=document.querySelector(".wrapper")

let rate=null;
star_numbers.forEach((star_number) => {
    star_number.addEventListener('click',(e)=>{
        const active=document.querySelector(".checked")
        if(active){
            active.classList.remove("checked")
        }
        const card=e.target;
        card.classList.add("checked");
        rate=e.target.innerText;
    })
})
btn.addEventListener('click',()=>{
    if(rate){
        click_number.innerText=rate;
        star_container.style.display="none";
        Thank_wrapper.style.display="block";
    }
    else{
        alert('There are not select a number')
    }
})