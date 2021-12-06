const player1Name = 'Rocky Balboa'
let player1HitPoints = 100
const player2Name = 'Apollo Creed'
let player2HitPoints = 100

console.log('Reaaady? Fight!')

let game = setInterval(
    function() {
        
        const player2Strength = Math.round(Math.random() * 20)
        player1HitPoints = player1HitPoints - player2Strength

        console.log(`Apollo Creed frappe Rocky Balboa pour ${player2Strength} points de vie.`)
        console.log(`Il reste ${player1HitPoints} points de vie à Rocky Balboa.`)

        const player1Strength = Math.round(Math.random() * 20)
        player2HitPoints = player2HitPoints - player1Strength

        console.log(`Apollo Creed frappe Rocky Balboa pour ${player1Strength} points de vie.`)
        console.log(`Il reste ${player2HitPoints} points de vie à Apollo Creed.`)

        if (player1HitPoints <= 0 || player2HitPoints <= 0) {
            console.log((player2HitPoints > 0 ? 'Apollo Creed ' : 'Rocky Balboa ') + 'remporte le combat!')

            clearInterval(game)
        }
    }, 
    500
)