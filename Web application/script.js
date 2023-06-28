function showGreeting() {
    var name = document.getElementById("nameInput").value;
    var greeting = document.getElementById("greeting");
    greeting.innerHTML = "Hello, " + name + "!";
}
