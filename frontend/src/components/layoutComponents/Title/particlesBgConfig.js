const config = {
  num: [10, 30],
  rps: 0.8,
  radius: [100, 400],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-400, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: 'all', // all or center or {x:1,y:1,width:100,height:100}
  color: ['random', '#ff0000'],
  cross: 'dead', // cross or bround
  random: 15,  // or null,
  g: 1,    // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath()
    ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2)
    ctx.fillStyle = particle.color
    ctx.fill()
    ctx.closePath()
  }
}
export default config