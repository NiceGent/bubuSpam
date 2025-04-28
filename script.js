let modalEl = document.getElementById("modal");
const acceptBtn = document.getElementById("accept");
const modalCloseBtn = document.getElementById("close-button");
const declineBtn = document.getElementById("decline");
let modalText = document.getElementById("modal-text-input");
let inputForm = document.getElementById("input-form");
const formButtons = document.getElementById("form-buttons");

setTimeout(function(event) {
    modalEl.style.display = "block";
    modalCloseBtn.disabled;
}, 1500)


declineBtn.addEventListener("mouseover", function() {
    formButtons.classList.toggle("form-button-reverse");
})

inputForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const submittedData = new FormData(inputForm)

    let userInputName = submittedData.get("name");
    let userInputEmail = submittedData.get("email");

    setTimeout(function() {

        modalText.innerHTML = ` <img src="images/loading.svg" alt="loading gif"/>
                                <p>Hold tight, we're uploading your information<p>`

    },1000)


    setTimeout(function() {
        modalText.innerHTML = ` 
                        <img src="images/dudu.png" alt="loading gif" id="bubu"/>

                        <p class="small">Thank You <span class="input-name">${userInputName}</span>, 
                            Your Email address <span class="input-name">${userInputEmail}</span> is now on Mr Bubu's database
                        </p>
        
                        <p class="small">Mr Bubu will now send you SPAM & JUNK</p>
                        `

        modalCloseBtn.disabled = false;
        document.getElementById("input-form").style.display = "none";


    }, 8000)
})

modalCloseBtn.addEventListener("click", function() {
    modalEl.style.display = "none"
})