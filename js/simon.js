// SIMON's JavaScript version 0.1 alpha by Vin Lacey

const COLORS = ["red", "green", "blue", "yellow"]
// we need to create an array of choices
// which grows depending on round and level
let current_game_array = []

const random_color = () => {
  return COLORS[ Math.floor( Math.random() * 4 ) ]
}
console.log("Hello")
document.getElementById("generator").addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    current_game_array.push(random_color())
  }
  // output array
  document.getElementById("output-screen").textContent = `${current_game_array}`
})
