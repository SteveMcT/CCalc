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

        if (type === ('fval')) {
            this.value = $('#fval')
            this.second = $('#sval')
            this.which = true
            this.em = this.em1
            this.text1 = this.curr1.val()
            this.text2 = this.curr2.val()
            this.t = $('#curr1Field')
        } else {
            this.value = $('#sval')
            this.second = $('#fval')
            this.which = false
            this.em = this.em2
            this.text2 = this.curr1.val()
            this.text1 = this.curr2.val()
            this.t = $('#curr2Field')
        }

        if (this.isNaN(this.t.val())) {
            this.em.innerHTML = "Please enter a valid value"
            return
        }

        this.value = eval(this.value).toString()
        this.value = this.value.replace(",", ".")

        if (this.value == "") this.em.innerHTML = "Please enter a value"
        else if (this.text1 === this.text2) {
            this.em.innerHTML = "Please use different currencies"
            this.second.value = this.value
        } else {
            $.getJSON('https://currencies.apps.grandtrunk.net/getlatest/' + text1.toLowerCase() + '/' + text2.toLowerCase(),
                function(data) {
                    second.value = parseFloat(this.value * this.data).toFixed(this.commas)
                });
        }
    }

    changeComma(val) {
        commas = val
        change('fval')
    }

    isNaN(x) {
        x = x.replaceAll(".", "").replaceAll(",", "").replaceAll("+", "").replaceAll("-", "").replaceAll("*", "").replaceAll("/", "")
        return !/^\d+$/.test(x);
    }
}