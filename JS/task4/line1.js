window.onload = function () {
	if (!document.getElementsByTagName || !document.getElementsByTagName('button')) return false;
	if (!document.getElementById || !document.getElementById('arr') || !document.getElementById('num')) return false;

	var btns = document.getElementsByTagName('button');
	var input = document.getElementById('num');
	var ArrP = document.getElementById('arr');
	var arr = new Array();
	//清空输入框
	input.value = "";
	//创建节点
	function createSpnode(text) {
		window.numNode = document.createElement("span");
		//给新增节点绑定事件
		numNode.onclick = function(){
            ArrP.removeChild(this);
        }
        numNode.innerHTML = text;
	}

	//---给按钮绑定事件---
	//leftIn
	btns[0].onclick = function () {
		var num = input.value;
		//判断输入是否为数字
		if (isNaN(num) || (num == "")) {
			alert('请输入数字');
			return false;
		}
		arr.unshift(num);
		createSpnode(num);
		ArrP.insertBefore(numNode,ArrP.childNodes[0]);
	}
	//rightIn
	btns[1].onclick = function () {
		var num = input.value;
		//判断输入是否为数字
		if (isNaN(num) || (num == "")) {
			alert('请输入数字');
			return false;
		}
		arr.push(num);
		createSpnode(num);
		ArrP.appendChild(numNode);
	}
	//leftOut
	btns[2].onclick = function () {
		if (arr.length == 0) {
			alert('队列中没有数字');
			return false;
		}
		arr.shift(arr[arr.length - 1]);
		var firstNode = ArrP.firstChild;
		ArrP.removeChild(firstNode);
	}
	btns[3].onclick = function () {
		if (arr.length == 0) {
			alert('队列中没有数字');
			return false;
		}
		arr.pop(arr[arr.length - 1]);
		var lastNode = ArrP.lastChild;
		ArrP.removeChild(lastNode);
	}
}