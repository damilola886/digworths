        let mod = document.querySelector(".mod");
        let mod2 = document.querySelector(".hire2");
        let hireModal = document.querySelectorAll(".upp");
        let modal = document.querySelector(".modalBG");
        let modalClose = document.querySelector(".closeModal");
        let privacy = document.querySelector(".pri");
        let terms = document.querySelector(".tou");
        let modalPri = document.querySelector(".modalPrivacy");
        let modalTou = document.querySelector(".modalTerms");
        let footer = document.querySelector(".getget");
        let firstName = document.querySelector("#fname");
        let secondName = document.querySelector("#sname");
        let phone = document.querySelector("#phone");
        let email = document.querySelector("#email");
        let companyName = document.querySelector("#companyname");
        let describeProject = document.querySelector("#describeproject");

        hireModal.forEach((item) => {
            item.onclick = () => {
                modal.style.display = 'block';
            }
        })

        const clearFields = () => {
            firstName.value = "";
            secondName.value = "";
            phone.value = "";
            email.value = "";
            companyName.value = "";
            describeProject.value = "";
        }

        privacy.onclick = function displayModal() {
            modalPri.style.display = "block";
        }

        terms.onclick = function displayModal() {
            modalTou.style.display = "block";
        }


 function close (e) {
            clearFields();
            modal.style.display = "none";
            modalTou.style.display = "none";
            modalPri.style.display = "none";
            e.preventDefault();
        } 

        modalClose.addEventListener('click', close);
    

        const isInViewPort = (element) => {
            let bounding = element.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        
   
       const top2 = (ele) => {
        ele = document.querySelector(".gh");
        if(isInViewPort(ele)) {
        document.querySelector("#tff").classList.add('slide');
        } else {
    }
}

const kn =  (ele2) => {
    ele2 = document.querySelector(".no");
    if(isInViewPort(ele2)) {
    document.querySelector(".win").classList.add('slide');
    document.querySelector(".iim").classList.add('slide2');
    } else {
}
}

const kn2 =  (ele3) => {
    ele3 = document.querySelectorAll(".con2");
    ele3.forEach((item) => {
        if(isInViewPort(item)) {
           item.classList.add('slide3');
            } else {
        }
    }) 
}

const kn3 =  (ele4) => {
    ele4 = document.querySelectorAll("#hhh");
    ele4.forEach((item) => {
        if(isInViewPort(item)) {
           item.classList.add('slide3');
            } else {
        }
    })
    
}

window.onscroll = () => { 
    top2();
    kn();
    kn2();
    kn3();
 }
