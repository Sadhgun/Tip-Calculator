function calculateTip() {
    const bill = parseFloat(document.querySelector('[Bill-Amount]').value)
    const qual = parseFloat(document.querySelector('[service]').value)

    if (bill === "" || qual === ""){
        alert('Please enter all values!')
    }

    const total = bill * (1 + qual)
    
    totalTip = document.querySelector('[Total-Tip]')
    document.getElementById('total').style.display = 'block'
    totalTip.innerHTML = total
}

document.querySelector('[Calculator]').onclick = function() {
    calculateTip()
}