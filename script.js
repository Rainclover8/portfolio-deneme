const home = document.getElementById('home')
const about = document.getElementById('aboutMe')
const contact = document.getElementById('contactme')



console.log(scrollY);



// function ekranTakibi(){

//     if(scrollY < 700){
//         home.classList.add('active')
//     }else if(scrollY > 718 && scrollY < 800){
//         about.classList.add('active')
//     }else{
//         contact.classList.add('active')
//     }
// }

window.addEventListener('scroll', () =>{
    if(scrollY < 700){
        home.classList.add('active')
        about.classList.remove('active')
        contact.classList.remove('active')
    }else if(scrollY > 718 && scrollY < 800){
        about.classList.add('active')
        home.classList.remove('active')
        contact.classList.remove('active')
    }else{
        contact.classList.add('active')
        about.classList.remove('active')
        home.classList.remove('active')
    }
})