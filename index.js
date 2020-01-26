let mod = document.querySelector(".mod");
        let mod2 = document.querySelector(".hire2");
        let mod0 = document.querySelector(".hire0");
        let modal = document.querySelector(".modalBG");
        let modalAll = document.querySelector(".targetCloseModal");
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

        // const clearFields = () => {
        //     firstName.value = "";
        //     secondName.value = "";
        //     phone.value = "";
        //     email.value = "";
        //     companyName.value = "";
        //     describeProject.value = "";
        // }

        // privacy.onclick = function displayModal() {
        //     modalPri.style.display = "block";
        // }



        // terms.onclick = function displayModal() {
        //     modalTou.style.display = "block";
        // }

        // // footer.onclick = function (e) {
        // //     if(e.target.className = "form") {
        // //         modal.style.display = "block";
        // //     }
        // // }


        // mod.onclick = function (e) {
        //     e.preventDefault;
        //     modal.style.display = "block";
        // }

        // mod2.onclick = function (e) {
        //     e.preventDefault;
        //     modal.style.display = "block";
        // }

        // mod0.onclick = function (e) {
        //     e.preventDefault;
        //     modal.style.display = "block";
        // }

// fix modal close button
//  function close (e) {
//             clearFields();
//             e.preventDefault;
//             modal.style.display = "none";
//             modalTou.style.display = "none";
//             modalPri.style.display = "none";
//             alert("hello");
//         } 
    

        const isInViewPort = (element) => {
            let bounding = element.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        window.onscroll = (ele) => {
            ele = document.querySelector(".gh");
            if(isInViewPort(ele)) {
            console.log('visible')
            document.querySelector("#tff").classList.add('slide');
            } else {
            console.log("not visible");
        }
    }

    window.onscroll = (ele) => {
        ele = document.querySelector(".no");
        if(isInViewPort(ele)) {
        console.log('visible')
        document.querySelector(".win").classList.add('slide');
        document.querySelector(".iim").classList.add('slide2');
        } else {
        console.log("not visible");
    }
}

// window.onscroll = (ele) => {
//     ele = document.querySelector(".no");
//     if(isInViewPort(ele)) {
//     console.log('visible')
//     document.querySelector(".win").classList.add('slide2');
//     } else {
//     console.log("not visible");
// }
// }
