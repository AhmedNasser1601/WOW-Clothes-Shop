function user_login() {
    var
        email = "",
        password = "",
        input = [];

    input = document.getElementsByTagName("input");

    for (var i = 0; i < input.length; i++) {
        if (input[i].parentNode.name === "signin" &&
            input[i].name === "email") {
            email = input[i].value;
        } else if (input[i].parentNode.name === "signin" &&
            input[i].name === "password") {
            password = input[i].value;
        }
    }

    var
        userEmail = "email@gmail.com",
        userPassword = "123";
    if (userEmail === email && userPassword === password) {
        window.open("HOME.html");
    }
}

function admin_login() {
    var
        email = "",
        password = "",
        input = [];

    input = document.getElementsByTagName("input");

    for (var i = 0; i < input.length; i++) {
        if (input[i].parentNode.name === "signin" &&
            input[i].name === "email") {
            email = input[i].value;
        } else if (input[i].parentNode.name === "signin" &&
            input[i].name === "password") {
            password = input[i].value;
        }
    }

    var
        adminEmail = "email@gmail.com",
        adminPassword = "123456";
    if (adminEmail === email && adminPassword === password) {
        window.open("ADMIN.html");
    }
}