let menubar = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menubar.onclick = ()=>{
    menubar.classlist.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


window.onscroll = ()=>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active'); 
    }

    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active')
}

window.onload = () =>{

    if(window.scrollY = 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.add('active');
    }
}

document.querySelector('#login-btn').onclick = ()=>{
    document.querySelector('.login-form-container').classList.toggle('active');

}



document.querySelector('#login-btn').onclick = ()=>{
    document.querySelector('.close-login-btn').classList.remove('active');

}


document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(element =>{
        let speed = element.getAttribute('data-speed');

        let x = (window.innerWidth = e.pageX * speed) / 90;
        let y = (window.innerHeight = e.ppageY * speed) / 90;

        element.style.trasform = `traslateX(${y}px) traslate(${x}px)`;
    })
}



document.querySelector('.home').onmouseleave= (e) =>{
    document.querySelectorAll('.home-parallax').forEach(element =>{
       
        element.style.trasform = `traslateX(0px) traslate(0px)`;
    })
}





let wrapper  = document.querySelector('.wrapper-box');
let activeBox = wrapper.querySelector()