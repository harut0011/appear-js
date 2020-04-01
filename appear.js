alert('appear.js connected')
let offset // You gotta assign a value to this in your js document
let startPos // Start position for element
let finishPos // Finish poxition for element
function anim(animName, animClassOn, animClass) {
	animName.forEach(function(element, index) {
		if ((window.innerHeight - element.getBoundingClientRect().top) > offset) {
			element.classList.add(animClassOn);
			// element.classList.remove(animClass)
		}
	})
}


const fadeUps = document.querySelectorAll('.fade-up');
window.addEventListener('scroll', () => {
	anim(fadeUps, 'fade-up-on')
})
