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
    }else if(scrollY > 718 && scrollY < 900){
        about.classList.add('active')
        home.classList.remove('active')
        contact.classList.remove('active')
    }else{
        contact.classList.add('active')
        about.classList.remove('active')
        home.classList.remove('active')
    }
})


// let toplam = 0.1 + 0.2;
// console.log(toplam );

// let toplam2 = 0.2 + 0.3; 
// console.log(toplam2 === 0.5);

let deneme = document.getElementById('nameSurname').value
let mail = document.getElementById('mail').value
let tavsiye = document.getElementById('tavsiye').value

let gosterMsg = "Adı Soyadı:" + deneme + "Mail:" + mail + "tavsiye metni: "+ tavsiye + "."
// `
// Ad: ${name}
// mail: ${mail}
// tavsiye metni: ${tavsiye}
// `
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "barancicek.dev@gmail.com",
        Password : "25AB6EB503A224EEB635C6B893B21B56E63A",
        To : "ts.baran6161@gmail.com",
        From : "barancicek.dev@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : gosterMsg,
    }).then(
      message => alert(message)
    );
    
}