const arr = new Array(9);

const play = (id, player) => {
	if (document.getElementById('info').innerHTML == 'Победили крестики!' || document.getElementById('info').innerHTML == 'Победили нолики!' ||document.getElementById('info').innerHTML == 'Победила дружба!!') return false;
	if (arr[id]) return false;
	arr[id] = player;
	document.getElementById(id).innerHTML = player;
	if (!winner()) {
		player === 'x' ? autoPlayer() : null;
	} else {
		reset(winner());
	}
};

const autoPlayer = () => {
	let id = Math.floor(Math.random() * 9);
	arr[id] ? autoPlayer() : play(id, '0');
};

const reset = (player) => {
	if (player === 'xtrue') {
		document.getElementById('info').innerHTML = 'Победили крестики!';
       
	}
	if (player === '0true') {
		document.getElementById('info').innerHTML = 'Победили нолики!';
     
	}
	if (player === 'ntrue') {
		document.getElementById('info').innerHTML = 'Победила дружба!!';
       
	}
};

const reload = () => {
	location.reload();
};

const winner = () => {
	if (arr[0] == 'x' && arr[1] == 'x' && arr[2] == 'x') return 'x' + true;
	if (arr[0] == '0' && arr[1] == '0' && arr[2] == '0') return '0' + true;

	if (arr[3] == 'x' && arr[4] == 'x' && arr[5] == 'x') return 'x' + true;
	if (arr[3] == '0' && arr[4] == '0' && arr[5] == '0') return '0' + true;

	if (arr[6] == 'x' && arr[7] == 'x' && arr[8] == 'x') return 'x' + true;
	if (arr[6] == '0' && arr[7] == '0' && arr[8] == '0') return '0' + true;

	if (arr[0] == 'x' && arr[3] == 'x' && arr[6] == 'x') return 'x' + true;
	if (arr[0] == '0' && arr[3] == '0' && arr[6] == '0') return '0' + true;

	if (arr[1] == 'x' && arr[4] == 'x' && arr[7] == 'x') return 'x' + true;
	if (arr[1] == '0' && arr[4] == '0' && arr[7] == '0') return '0' + true;

	if (arr[2] == 'x' && arr[5] == 'x' && arr[8] == 'x') return 'x' + true;
	if (arr[2] == '0' && arr[5] == '0' && arr[8] == '0') return '0' + true;

	if (arr[0] == 'x' && arr[4] == 'x' && arr[8] == 'x') return 'x' + true;
	if (arr[0] == '0' && arr[4] == '0' && arr[8] == '0') return '0' + true;

	if (arr[2] == 'x' && arr[4] == 'x' && arr[6] == 'x') return 'x' + true;
	if (arr[2] == '0' && arr[4] == '0' && arr[6] == '0') return '0' + true;

	if (arr[0] == 'x' && arr[4] == 'x' && arr[8] == 'x') return 'x' + true;
	if (arr[0] == '0' && arr[4] == '0' && arr[8] == '0') return '0' + true;
	if (arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8]) return 'n' + true;
};