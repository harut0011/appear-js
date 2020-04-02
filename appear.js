alert('appear.js connected')
let offset // You gotta assign a value to this in your js document
let startPos // Start position for element
let finishPos // Finish poxition for element
function anim(animName, animNameOn, animClass) {
	animName.forEach(function(element, index) {
		if ((window.innerHeight - element.getBoundingClientRect().top) > offset) {
			element.style.animationName = animNameOn
			// element.classList.remove(animClass)
		}
	})
}


const fadeUps = document.querySelectorAll('.fade-up');
window.addEventListener('scroll', () => {
	anim(fadeUps, 'fade-up')
})

const zoomIns = document.querySelectorAll('.zoom-in')
window.addEventListener('scroll', () => {
	anim(zoomIns, 'zoom-in')
})
