$(document).ready(function(){
    $("#buy-button").click(function(){
        let value = $("#num-items-cart").text()
        value++
        $("#num-items-cart").text(value)
    })

    $("#rate-now").click(function(){
        $("#eval-input").toggleClass("d-none")
    })

    $("#submit-form").click(function(){
        let opinion = $("#textarea-opinion").val()
        let name = $("#name-opinion").val()
        $("#opinion-text").text(`"${opinion}"`)
        $("#opinion-name").text(`- ${name}`)
    })

    $("#desc-tab").click(function() {
        cleanAllFields()
        this.classList.add("prod-info-black")
        $("#info-desc").toggleClass("d-none")
    })

    $("#items-tab").click(function() {
        cleanAllFields()
        this.classList.add("prod-info-black")
        $("#included-items").toggleClass("d-none")
    })

    $("#warranty-tab").click(function() {
        cleanAllFields()
        this.classList.add("prod-info-black")
        $("#info-warranty").toggleClass("d-none")
    })
})

function cleanAllFields() {
    const elementsTabs = document.querySelectorAll(".prod-info")
    const elementsDesc = document.querySelectorAll(".text-prod")
    elementsTabs.forEach(element => {
        element.classList.remove("prod-info-black")
        element.classList.add("prod-info-grey")
    });
    elementsDesc.forEach(e => {
        e.classList.remove("d-block")
        e.classList.add("d-none")
    })
}