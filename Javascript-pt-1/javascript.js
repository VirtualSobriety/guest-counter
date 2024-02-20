let count = 0

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

console.log(countEl)

function increment() {
    count += 1
    // countEl.innerText = count
    countEl.textContent = count
   }

function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    // onclick(count = 0)
    count = 0
    countEl.innerText = 0
    console.log(count)
}