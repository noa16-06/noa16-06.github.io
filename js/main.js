// Nav scroll effect
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 20)
}, { passive: true })

// Scroll reveal + skill bars
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('in')
    entry.target.querySelectorAll('.skill-fill').forEach(el => {
      el.style.width = el.dataset.w
    })
    io.unobserve(entry.target)
  })
}, { threshold: 0.15 })

document.querySelectorAll('.reveal').forEach(el => io.observe(el))

// Project card mouse-glow
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
  })
})

// Typewriter
const roles = ['Jr. Developer', 'Security Enthusiast.', 'CTF Player.', 'Lifelong Learner.']
let ri = 0, ci = 0, del = false
const typed = document.querySelector('.typed')

function tick() {
  const word = roles[ri]
  typed.textContent = del ? word.slice(0, --ci) : word.slice(0, ++ci)
  let ms = del ? 55 : 95
  if (!del && ci === word.length) { ms = 2200; del = true }
  else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; ms = 380 }
  setTimeout(tick, ms)
}
setTimeout(tick, 1600)

// Footer year
document.getElementById('year').textContent = new Date().getFullYear()
