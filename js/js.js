// ================= Hours ================
let lis = document.querySelectorAll('.hours li');
let boxes = document.querySelectorAll('.hours .info .box');

lis.forEach((li)=>{
    li.addEventListener('click',function(e){
        lis.forEach((li)=>{
            li.classList.remove('active');
        });
        e.target.classList.add('active');

        boxes.forEach((box)=>{
            box.style.animation = 'move 0.5s 1 ease-in-out';
        });
    });
});

// ============= counter ==================
let counters = document.querySelectorAll(".count");
let counterDiv = document.querySelector('.counter');
let btn = document.querySelector('.scroll');

console.log(counterDiv.offsetTop);

window.onscroll = function(){

    // scroll top
    if(window.scrollY >= 1000){
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
    btn.onclick = function(){
        window.scrollTo ({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }
};




