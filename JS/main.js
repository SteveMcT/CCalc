var fval, sval, em1, em2, curr1, curr2
let url = 'https://currencies.apps.grandtrunk.net/getlatest/eur/usd',
    commas = 6

window.onload = function() {
    this.fval = document.getElementById("curr1Field")
    this.sval = document.getElementById("curr2Field")
    this.em1 = document.getElementById("calcField_tool1")
    this.em2 = document.getElementById("calcField_tool2")
    this.curr1 = document.getElementById("curr1")
    this.curr2 = document.getElementById("curr2")
}


function change1() {
    em1.innerHTML = em2.innerHTML = ""
    let value = fval.value
    value = value.replace(",", ".")


    var text1 = curr1.options[curr1.selectedIndex].text,
        text2 = curr2.options[curr2.selectedIndex].text;

    if (value == "") em1.innerHTML = "Please enter a value"
    else if (isNaN(value)) em1.innerHTML = "Please enter a valid value"
    else if (text1 === text2) {
        em1.innerHTML = "Please use different currencies"
        sval.value = value
    } else {
        $.getJSON('https://currencies.apps.grandtrunk.net/getlatest/' + text1.toLowerCase() + '/' + text2.toLowerCase(),
            function(data) {
                sval.value = parseFloat(value * data).toFixed(commas)
            });
    }
}

function change2() {
    em1.innerHTML = em2.innerHTML = ""
    let value = sval.value
    value = value.replace(",", ".")

    var text2 = curr1.options[curr1.selectedIndex].text,
        text1 = curr2.options[curr2.selectedIndex].text;

    if (value == "") em2.innerHTML = "Please enter a value"
    else if (isNaN(value)) em2.innerHTML = "Please enter a valid value"
    else if (text1 === text2) {
        em2.innerHTML = "Please use different currencies"
        fval.value = value
    } else {
        $.getJSON('https://currencies.apps.grandtrunk.net/getlatest/' + text1.toLowerCase() + '/' + text2.toLowerCase(),
            function(data) {
                fval.value = parseFloat(value * data).toFixed(commas)
            });
    }
}

function changeComma(val) {
    commas = val
    change1()
    change2()
}

function isNaN(x) {
    x = x.replace(".", "")
    x = x.replace("-", "")
    return isnum = !/^\d+$/.test(x);
}