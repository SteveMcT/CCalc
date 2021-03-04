window.onload = () => {
    let calc = new Calculations();
    calc.change()
}

class Calculations {

    constructor() {
        this.fval = $("#curr1Field")
        this.sval = $("#curr2Field")
        this.em1 = $("#calcField_tool1")
        this.em2 = $("#calcField_tool2")
        this.curr1 = $("#curr1")
        this.curr2 = $("#curr2")
        this.url = 'https://currencies.apps.grandtrunk.net/getlatest/eur/usd'
        this.commas = 6
    }

    change(type) {

        this.em1.innerHTML = this.em2.innerHTML = ""
        console.log(this.curr1)

        if (type === ('fval')) {
            let first = fval,
                second = sval,
                which = true,
                em = this.em1,
                text1 = this.curr1.options[curr1.selectedIndex].val(),
                text2 = this.curr2.options[curr2.selectedIndex].val()
        } else {
            let first = sval,
                second = fval,
                which = false,
                em = em2,
                text2 = this.curr1.options[curr1.selectedIndex].val(),
                text1 = this.curr2.options[curr2.selectedIndex].val()
        }

        let value = first.val()

        if (this.isNaN(value)) {
            em.innerHTML = "Please enter a valid value"
            return
        }

        value = eval(value).toString()
        value = value.replace(",", ".")

        if (value == "") em.innerHTML = "Please enter a value"
        else if (text1 === text2) {
            em.innerHTML = "Please use different currencies"
            second.value = value
        } else {
            $.getJSON('https://currencies.apps.grandtrunk.net/getlatest/' + text1.toLowerCase() + '/' + text2.toLowerCase(),
                function(data) {
                    second.value = parseFloat(value * data).toFixed(commas)
                });
        }
    }

    changeComma(val) {
        commas = val
        change('fval')
    }

    isNaN(x) {
        x = x.replaceAll(".", "").replaceAll(",", "").replaceAll("+", "").replaceAll("-", "").replaceAll("*", "").replaceAll("/", "")
        return isnum = !/^\d+$/.test(x);
    }

}


// function change1() {
//     em1.innerHTML = em2.innerHTML = ""

//     let value = fval.value
//     if (isNaN(value)) {
//         em1.innerHTML = "Please enter a valid value"
//         return
//     }

//     value = eval(value).toString()
//     value = value.replace(",", ".")

//     var text1 = curr1.options[curr1.selectedIndex].text,
//         text2 = curr2.options[curr2.selectedIndex].text;

//     testStr = value.split()

//     if (value == "") em1.innerHTML = "Please enter a value"
//     else if (text1 === text2) {
//         em1.innerHTML = "Please use different currencies"
//         sval.value = value
//     } else {
//         $.getJSON('https://currencies.apps.grandtrunk.net/getlatest/' + text1.toLowerCase() + '/' + text2.toLowerCase(),
//             function(data) {
//                 sval.value = parseFloat(value * data).toFixed(commas)
//             });
//     }
// }

// function change2() {
//     em1.innerHTML = em2.innerHTML = ""

//     let value = sval.value
//     if (isNaN(value)) {
//         em2.innerHTML = "Please enter a valid value"
//         return
//     }

//     value = eval(value).toString()
//     value = value.replace(",", ".")



//     if (value == "") em2.innerHTML = "Please enter a value"
//     else if (text1 === text2) {
//         em2.innerHTML = "Please use different currencies"
//         fval.value = value
//     } else {
//         $.getJSON('https://currencies.apps.grandtrunk.net/getlatest/' + text1.toLowerCase() + '/' + text2.toLowerCase(),
//             function(data) {
//                 fval.value = parseFloat(value * data).toFixed(commas)
//             });
//     }
// }