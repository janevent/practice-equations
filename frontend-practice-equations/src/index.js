function clickLogIn (){
    let logInButton = document.getElementById("log-in-1");
    logInButton.addEventListener("click", function(e){
    console.log(e);
    document.querySelector(".first-view").innerHTML = `<form>Name:<br>
    <input type="text" name="name"><br>
    password: <br>
    <input type="text" name="name">
    <input type="submit" value="Submit">
    </form>`
})
}

function clickSignUp(){
    let signUpButton = document.getElementById("sign-up-1");
    //signUpButton
}

clickLogIn();