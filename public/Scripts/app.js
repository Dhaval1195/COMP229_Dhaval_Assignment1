
(function(){

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();

function showPopup() { 

    let FirstName = document.getElementById("firstN");
    let LastName = document.getElementById("lastN");
    let Phone = document.getElementById("phone");
    let Email = document.getElementById("email");
    let Message = document.getElementById("mess");
    alert("Thank you for submitting!"); 
    alert("Name: "+ FirstName.value + " " + LastName.value);
    alert("Phone Number: " + Phone.value + "   Email: " + Email.value);


    location.href="/home";
}

