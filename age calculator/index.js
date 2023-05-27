const inp = document.querySelector('input');
const btn = document.querySelector('button');
const ans = document.querySelector('.answer-filed');
const inp_year = document.querySelector('.year-inp');
const inp_month = document.querySelector('.month-inp');
const inp_date = document.querySelector('.day-inp');
const not_valid = document.querySelector('.not-valid');
inp.max = new Date().toISOString().split('T')[0];

console.log(new Date().toISOString().split('T')[0]);

const getdata = () => {
	const birthdate = new Date(inp.value);

	let birthdate_date = birthdate.getDate();
	let birthdate_month = birthdate.getMonth() + 1;
	let birthdate_year = birthdate.getFullYear();

	const today = new Date();

	let today_date = today.getDate();
	let today_month = today.getMonth() + 1;
	let today_year = today.getFullYear();

	let ttl_date, ttl_month, ttl_year;

	ttl_year = today_year - birthdate_year;

	if (today_month >= birthdate_month) {
		ttl_month = today_month - birthdate_month;
	} else {
		ttl_year--;
		ttl_month = 12 + today_month - birthdate_month;
	}

	if (today_date >= birthdate_date) {
		ttl_date = today_date - birthdate_date;
	} else {
		ttl_month--;
		ttl_date = getdaysinmonth(birthdate_year, birthdate_month) + today_date - birthdate_date;
	}

	if (ttl_month < 0) {
		ttl_month = 11;
		ttl_year--;
	}

	if (ttl_year < 0) {
		not_valid.style.display = 'block';
		ans.style.display = 'none';
		return false;
	} else {
		not_valid.style.display = 'none';
	}

	function getdaysinmonth(year, month) {
		const temp = new Date(year, month, 0).getDate();
		return temp;
	}

	inp_year.innerHTML = ttl_year;
	inp_month.innerHTML = ttl_month;
	inp_date.innerHTML = ttl_date;

	ans.style.display = 'flex';
};

btn.addEventListener('click', getdata);

window.addEventListener('keydown', (e) => {
	if (e.key == 'Enter') {
		getdata();
	}
});
