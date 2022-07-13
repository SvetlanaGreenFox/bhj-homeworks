const rotatorElement = document.querySelector('.rotator');

function rotate(prev, next) {
  prev.classList.remove('rotator__case_active');
  next.classList.add('rotator__case_active');
};

const activate = (element) => {
  const caseElements = Array.from(element.querySelectorAll('.rotator__case'));
  let count = 0;
	
  setInterval(() => {
		const prevElement = caseElements[count];
	
		let idxNext = count + 1;
		if(idxNext > caseElements.length - 1) {
			idxNext = 0;
			count = 0;
		} else {
			count += 1;
		}
		const nextElement = caseElements[idxNext];
		rotate(prevElement, nextElement);
  }, 1000);
};

window.addEventListener('load', () => {
  activate(rotatorElement);
});