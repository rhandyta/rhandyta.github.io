alert('Selamat datang disuwit jawa sederhana :)');
const nama = prompt('Masukan Nama');
if (nama){
	alert('Halo, mari bermain '+ nama);
}
// Pilihan Computer
function pilihanComputer(){
	const computer = Math.random();
	if (computer < 0.34)return 'semut';
	if (computer >= 0.34 && computer < 0.7)return 'orang';
	return 'gajah';
}
// aturan main
function rulesSuwit(player, computer){
	if (player == computer) return 'SERI!';
	if (player == 'gajah') return (computer == 'orang') ? 'MENANG!' : 'KALAH!';
	if (player == 'orang') return (computer == 'gajah') ? 'KALAH!' : 'MENANG!';
	if (player == 'semut') return (computer == 'orang') ? 'KALAH!' : 'MENANG!';
}
function roll(){
	const imgC = document.querySelector('.img-komputer');
	const img = ['gajah', 'orang', 'semut'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if (new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgC.setAttribute('src', img[i++]+'.jpg');
		if (i == img.length) i = 0;
	}, 100);
}

function score() {
	const x = document.querySelector('.info');
	if (x.innerHTML == 'MENANG!'){
		scorePlayer++;
		let scoreP = document.querySelector('.playerP');
		scoreP.innerHTML = scorePlayer;
	} 
	if (x.innerHTML == 'KALAH!') {
		scoreComputer++;
		let scoreC = document.querySelector('.computerP');
		scoreC.innerHTML = scoreComputer;
	}
}


let scorePlayer = 0;
let scoreComputer = 0;
// menangkap pilihan player dan menjalankan fungsi
const player = document.querySelectorAll('li img');
// jalankan fungsi kejadian
player.forEach(function(pilihan){
	pilihan.addEventListener('click', function(){
		const computer = pilihanComputer();
		const player = pilihan.className;
		const result = rulesSuwit(player, computer);
		roll();
		setTimeout(function() {
			const imgC = document.querySelector('.img-komputer');
			imgC.setAttribute('src', computer+'.jpg');
			const info = document.querySelector('.info');
			info.innerHTML = result;
			score();
			console.log(computer +'-'+ player +'-'+ result);
		}, 1000);
	});
});



//kurang efektif berulang ulang
// const gajah = document.querySelector('img[class=gajah]');
// const orang = document.querySelector('img[class=orang]');
// const semut = document.querySelector('img[class=semut]');
// gajah.addEventListener('click', function(){
// 	const computer = pilihanComputer();
// 	const player = gajah.className;
// 	const result = rulesSuwit(player, computer);
// 	const getInfo = document.querySelector('.info');
// 	const imgC = document.querySelector('.img-komputer');
// 	imgC.setAttribute('src', computer+'.jpg');
// 	getInfo.innerHTML = result;
// });
// orang.addEventListener('click', function(){
// 	const computer = pilihanComputer();
// 	const player = orang.className;
// 	const result = rulesSuwit(player, computer);
// 	const getInfo = document.querySelector('.info');
// 	const imgC = document.querySelector('.img-komputer');
// 	imgC.setAttribute('src', computer+'.jpg');
// 	getInfo.innerHTML = result;
// });
// semut.addEventListener('click', function(){
// 	const computer = pilihanComputer();
// 	const player = semut.className;
// 	const result = rulesSuwit(player, computer);
// 	const getInfo = document.querySelector('.info');
// 	const imgC = document.querySelector('.img-komputer');
// 	imgC.setAttribute('src', computer+'.jpg');
// 	getInfo.innerHTML = result;
// });







