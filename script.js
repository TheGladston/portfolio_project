// Menu hamgurger
document.querySelector(".hamburger").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

// Smoth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Budget Calc
document.querySelector("#amount").addEventListener("change", priceUpdate)
document.querySelector("#js").addEventListener("change", priceUpdate)
document.querySelector("#layout-yes").addEventListener("change", priceUpdate)
document.querySelector("#layout-no").addEventListener("change", priceUpdate)

document.querySelector("#deadline").addEventListener("change", function() {
    let deadline = document.querySelector("#deadline").value
    document.querySelector("label[for=deadline]").innerHTML = `Prazo: ${deadline} semanas`

    priceUpdate()
})

function priceUpdate(){
    let amount = document.querySelector("#amount").value
    let js = document.querySelector("#js").checked
    let layoutYes = document.querySelector("#layout-yes").checked
    let deadline = document.querySelector("#deadline").value
    
    let calc = (amount * 100)

    if (js) calc *= 1.1

    if (layoutYes) calc += 500

    let urgency = 1 - deadline * 0.1;
    calc *= 1 + urgency

    document.querySelector("#price").innerHTML = `R$ ${calc.toFixed(2)}`
}

