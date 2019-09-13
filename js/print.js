let body = document.body;
let head = document.head;
let style = document.createElement('style');
let css = '.box{border:1px solid black; width:300px; height:250px}';
css+= '.box{position:absolute; ' +
	'top: 220px; ' +
	'left:0; ' +
	'right:0; ' +
	'margin: 0 auto;' +
	'background: #824D00' +
	'}' +
	'.roof{' +
	'z-index:10;' +
	'position: absolute;' +
	'top:-401px;' +
	'left:-50px;' +
	'}' +
	'.roof::after{' +
	'content: " ";' +
	'    position: absolute;' +
	'    border: 200px solid transparent;' +
	'    border-bottom: 200px solid #666;' +
	'}' +
	'.truba{' +
	'z-index:9;' +
	'position:absolute;' +
	'top:-200px;' +
	'left:20px;' +
	'width: 50px;' +
	'height: 150px;' +
	'background: #D26200;' +
	'border: 1px solid #000;}' +
	'.window{' +
	'position:absolute;' +
	'right: 20px;' +
	'bottom:100px;' +
	'width: 100px;' +
	'height: 100px;' +
	'background:#fff;' +
	'border: 1px solid #000;}' +
	'.dor{' +
	'width: 110px;' +
	'height: 200px;' +
	'position:absolute;' +
	'bottom:0px;' +
	'left: 20px;' +
	'background: #999;' +
	'border: 1px solid #000;}';
head.appendChild(style);
style.appendChild(document.createTextNode(css));

let building = {
	home: ['box', 'roof', 'window', 'truba', 'dor'],
	createHome() {
		let divBox = document.createElement('div');
		this.home.forEach((item)=>{
			if (item == 'box')
			{
				body.append(divBox);
				divBox.className = item;
			} else {
				let elem = document.createElement('div');
				divBox.append(elem);
				elem.className = item;
			}
		});
	},
};
building.createHome();

