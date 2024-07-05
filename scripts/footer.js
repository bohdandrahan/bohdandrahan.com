document.addEventListener("DOMContentLoaded", () => {
	console.log('footer is run')
	const yearSpan = document.getElementById("footer_year");
	const currentYear = new Date().getFullYear();
	yearSpan.textContent = currentYear;
})
