const banner = document.querySelector('.banner');
const button = document.querySelector('button');

class Notification {

	constructor(state) {
		banner.innerHTML = `
			<div class="gradient"></div>
			<div class="icon">
				<div class="lines line1"></div>
				<div class="lines line2"></div>
			</div>
			<div class="info">
				<h3></h3>
				<p></p>
				</div>
		`;
		this.state = state;
		if (this.state === 'Success') {
			banner.className = 'banner success';
		} else if (this.state === 'Error') {
			banner.className = 'banner error';
		}
	}
	call(header, prompt) {
		setTimeout(() => banner.style.right = '20px', 500);
		banner.childNodes[5].childNodes[1].innerText = header;
		banner.childNodes[5].childNodes[3].innerText = prompt;
		this.hide();
	}
	hide() {
		setTimeout(() => banner.style.right = '-420px', 5000);
	}
}

const notf = new Notification('Error');
button.onclick = () => notf.call("Failed to registration!", 'You have failed to created account.');
// const notf = new Notification('Success');
// button.onclick = () => notf.call("Success registration!", 'You have successfuly created your own account.');