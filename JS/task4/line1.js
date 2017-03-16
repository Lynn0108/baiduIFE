window.onload = function () {
	if (!document.getElementsByTagName || !document.getElementsByTagName('button')) return false;
	if (!document.getElementById || !document.getElementById('arr') || !document.getElementById('num')) return false;

	var btns = document.getElementsByTagName('button');
	var arr = new Array();
	//清空输入框
	document.getElementById('num').value = "";
	//---给按钮绑定事件---
	//leftIn
	btns[0].onclick = function () {
		var num = document.getElementById('num').value;
		//var idname = this.id;
		//判断输入是否为数字
		if (isNaN(num) || (num == "")) {
			alert('请输入数字');
			return false;
		}
		arr.unshift(num);
		var numNode = document.createElement("span");
		numNode.onclick = function(){
                document.getElementById('arr').removeChild(this);
        }
		if (arr.length == 1) {
			document.getElementById('arr').appendChild(numNode);
		} else {
			var firstNode = document.getElementById('arr').firstChild;
			document.getElementById('arr').insertBefore(numNode,firstNode);
		}
		numNode.innerHTML = num;
	}
	//rightIn
	btns[1].onclick = function () {
		var num = document.getElementById('num').value;
		//判断输入是否为数字
		if (isNaN(num) || (num == "")) {
			alert('请输入数字');
			return false;
		}
		arr.push(num);
		var numNode = document.createElement("span");
		numNode.onclick = function(){
                document.getElementById('arr').removeChild(this);
        }
		document.getElementById('arr').appendChild(numNode);
		numNode.innerHTML = num;
	}
	//leftOut
	btns[2].onclick = function () {
		if (arr.length == 0) {
			alert('队列中没有数字');
			return false;
		}
		arr.shift(arr[arr.length - 1]);
		var firstNode = document.getElementById('arr').firstChild;
		document.getElementById('arr').removeChild(firstNode);
	}
	btns[3].onclick = function () {
		if (arr.length == 0) {
			alert('队列中没有数字');
			return false;
		}
		arr.pop(arr[arr.length - 1]);
		var lastNode = document.getElementById('arr').lastChild;
		document.getElementById('arr').removeChild(lastNode);
	}
}