let btn = document.getElementById('btn')
let inp1 = document.getElementById('inp1')
let res = document.getElementById('res')

function func(n){
    return n * 2
}

btn.addEventListener('click', () => alert('пока что данный аппарат лишь умножает введенное вами число вдвое!', func(inp1.value)))
// res.value = btn.addEventListener('click', () => func(inp1.value))
