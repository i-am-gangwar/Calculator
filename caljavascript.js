function getoutput() {
    return document.getElementById("output_value").innerText;
}
function printoutput(val) {
    document.getElementById("output_value").innerText = val;
}

function getinput() {
    return document.getElementById("input_value").innerText;

}
function printinput(val) {

    document.getElementById("input_value").innerText = val;
    // if (val == "")
    //     document.getElementById("input_value").innerText = val;
    // else {
    //     document.getElementById("input_value").innerText = getFormattedNumber(val);

    // }
}

var number = document.getElementsByClassName("btn");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var input = getinput();
        // console.log(input);



        input += this.id;

        printinput(input);

    })
}

var operator = document.getElementsByClassName("btn1");

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printinput("");
            printoutput("");
        }
        else if (this.id == "backspace") {
            var input = getinput().toString();
            if (input) {
                input = input.substr(0, input.length - 1);
                printinput(input);
            }
            printoutput("");


        }

        else {
            var input = getinput();
            var output = getoutput();

            if (input != "" || output != "") {


                if (this.id == "=") {
                    output = input;
                    var result = eval(output);
                    input = result;
                    printinput(input);
                    printoutput(result);
                    //  console.log(result);
                }
                else {

                    if (input[input.length - 1] >= 0 && input[input.length - 1] <= 9)
                        input = input + this.id;





                    printinput(input);
                }

            }



        }
    })
}
