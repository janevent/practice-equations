let configURL = "http://localhost:3000/"
let signUpURL = `${configURL}api/v1/users`

function submitSignUp(){
    let signUpSubmitB = document.getElementById("sign-up-submit");
    //debugger
    if(!!signUpSubmitB){
        //debugger
    signUpSubmitB.addEventListener("click", function(e){
        //debugger
        //create configurationObject 
        let nameInput = document.getElementById("sign-up-name");
        let userName = nameInput.value;
        //debugger
        let passwordInput = document.getElementById("sign-up-password");
        let userPassword = passwordInput.value;
        let configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
            body: JSON.stringify({
                name: userName,
                password: userPassword
              })
        }
        //post fetch request
        fetch(signUpURL, configurationObject)
        .then(function(response){
            return response.json
        })
        .then(function(json){
            console.log(json)
        })
        console.log(userName);
        document.querySelector(".first-view").innerHTML = ""
    })
    }
}

function clickLogIn (){
    let logInButton = document.getElementById("log-in-1");
    logInButton.addEventListener("click", function(e){
        console.log(e);
        document.querySelector(".first-view").innerHTML = `<form id="log-in-form">Name:<br>
        <input type="text" name="name"><br>
        password: <br>
        <input type="text" name="password"><br>
        <input type="submit" id="log-in-submit" value="Submit">
        </form>`
    })
}

function clickSignUp(){
    let signUpButton = document.getElementById("sign-up-1");
    signUpButton.addEventListener("click", function(e){
        console.log(e);
        document.querySelector(".first-view").innerHTML = `<form id="sign-up-form">Name:<br>
        <input type="text" name="name" id="sign-up-name"><br>
        password: <br>
        <input type="text" name="password" id="sign-up-password"><br>
        <input type="submit" id="sign-up-submit" value="Submit">
        </form>`
        submitSignUp();
        
    })

}



clickLogIn();
clickSignUp()
//submitSignUp();