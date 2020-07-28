function animate()
{
    ctx1.clearRect(0,0,canvas1.width,canvas1.height)
    ctx2.clearRect(0,0,canvas1.width,canvas1.height)
    ctx3.clearRect(0,0,canvas1.width,canvas1.height)
    ctx4.clearRect(0,0,canvas1.width,canvas1.height)
    ctx5.clearRect(0,0,canvas1.width,canvas1.height)
    
    handleRipples()
    ctx2.drawImage(background_lvl2,0,0,canvas1.width,canvas1.height)
    handleParticles()
    
    frogger.draw()
    frogger.update()
    
    handleObstacles()
    handleScoreBoard()
    ctx4.drawImage(grass,0,0,canvas1.width,canvas1.height)
    frame++
    requestAnimationFrame(animate)    
}

animate()

window.addEventListener('keydown',(e)=>{
    keys = []
    keys[e.keyCode] = true
    if(keys[37] || keys[38] || keys[39] || keys[40])
    {
        frogger.jump()
    }
})
window.addEventListener('keyup',(e)=>{
    keys = []
    keys[e.keyCode] = false
    frogger.moving = false
    frogger.frameX=0
})

scored = () =>{
    score++
    console.log("scored");
    gameSpeed += 0.05 
    frogger.x = canvas1.width/2 - frogger.width/2
    frogger.y = canvas1.height - frogger.height - 40
}

function handleScoreBoard() {
    ctx4.fillStyle ='black'
    ctx4.font = '15px Verdana'   
    ctx4.strokeText('Score',268,15)
    ctx4.font = '60px Verdana'   
    ctx4.fillText(score,270,65)
    ctx4.font = '15px Verdana'
    ctx4.strokeText("Collisions: " + collisionCount,10,175)
    ctx4.strokeText("Game Speed: " + gameSpeed.toFixed(1) ,10,195)
}

function collision(first,second)
{
    return !(
        first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y 
    )
}

function resetGame()
{
    frogger.x = canvas1.width/2 - frogger.width/2
    frogger.y = canvas1.height - frogger.height - 40
    score = 0
    collisionCount++
    gameSpeed = 1
}