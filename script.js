function addAlert() {
    alert("Loading weath report...")
}

function removeCookie(elem) {
    elem.parentNode.parentNode.remove()
}
function c2f(temp) {
    return Math.round (9/5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5/9 * (temp - 32));
}

// // function changeTemp(element) {
// //     console.log(element.value);
// //     for(var i=1; i<9; i++) {
// //         var tempChange = document.querySelector("#temp" +i);
// //         var tempValue = parseInt(tempChange.innerText);
// //         if(element.value == "&#8451") {
// //             tempChange.innerText = f2c(tempValue);
// //         } else {
// //             tempChange.innerText = c2f(tempValue);
// //         }
// //     }
// // }

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}

// function c2f(temp) {
//     return Math.round(9 / 5 * temp + 32);
// }

// function f2c(temp) {
//     return Math.round(5 / 9 * (temp - 32));
// }

// function convert(element) {
//     console.log(element.value);
//     for(var i=1; i<9; i++) {
//         var tempSpan = document.querySelector("#temp" + i);
//         var tempVal = parseInt(tempSpan.innerText);
//         if(element.value == "°C") {
//             tempSpan.innerText = f2c(tempVal);
//         } else {
//             tempSpan.innerText = c2f(tempVal);
//         }
//     }
// }