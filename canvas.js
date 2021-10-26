var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d")

//squares
c.fillRect(100, 100, 100, 100)
c.fillRect(300, 100, 100, 100)
c.fillRect(500, 100, 100, 100)
c.fillRect(700, 100, 100, 100)

console.log(canvas)

//line
c.beginPath
c.moveTo(150, 500)
c.lineTo(300, 400)
c.lineTo(400, 370)
c.stroke()

//arc or circle
c.beginPath()
c.arc(300, 300, 30, 0, Math.PI * 2, false)
c.strokeStyle = "blue"
c.stroke()
