
function showFor() {
    let num = parseInt(document.getElementById("for_num1").value);
    let text = document.getElementById("for_num2").value;

    let outputs = document.querySelectorAll("#forLoopSection p");
    let result = "";

    for (let i = 1; i <= num; i++) {
        result += i + ". " + text + "<br>";
    }

    outputs[0].innerHTML = result;
}

function clearFor() {
    document.getElementById("for_num1").value = "";
    document.getElementById("for_num2").value = "";
    document.querySelectorAll("#forLoopSection p")[0].innerHTML = "";
}



function showWhile() {
    let num = parseInt(document.getElementById("while_num1").value);
    let text = document.getElementById("while_num2").value;

    let outputs = document.querySelectorAll("#whileLoopSection p");

    let i = 1;
    let result = "";

    while (i <= num) {
        result += i + ". " + text + "<br>";
        i++;
    }

    outputs[0].innerHTML = result;
}

function clearWhile() {
    document.getElementById("while_num1").value = "";
    document.getElementById("while_num2").value = "";
    document.querySelectorAll("#whileLoopSection p")[0].innerHTML = "";
}



function showDoWhile() {
    let num = parseInt(document.getElementById("do_num1").value);
    let text = document.getElementById("do_num2").value;

    let outputs = document.querySelectorAll("#doWhileSection p");

    let i = 1;
    let result = "";

    do {
        result += i + ". " + text + "<br>";
        i++;
    } while (i <= num);

    outputs[0].innerHTML = result;
}

function clearDoWhile() {
    document.getElementById("do_num1").value = "";
    document.getElementById("do_num2").value = "";
    document.querySelectorAll("#doWhileSection p")[0].innerHTML = "";
}