window.onload = function () {
	if (!document.getElementById || !document.getElementById('show_txt') || !document.getElementById('txt')) return false;

	var txt = document.getElementById('txt');
	//压入、推出
	var leftIn = document.getElementById('leftIn'),
		rightIn = document.getElementById('rightIn'),
		leftOut = document.getElementById('leftOut'),
		rightOut = document.getElementById('rightOut');
	//查询
	var find_btn = document.getElementById('find'),
		findtxt = document.getElementById('findtxt');
	var show_txt = document.getElementById('show_txt'),
		spans = show_txt.getElementsByTagName('span');
	var findflag = false;
	//清空输入框
	txt.value = "";
	findtxt.value = "";
	//获取文本域内容
	//var strs = new Array();
	function splitString() {
		var txtval = txt.value;
		//分隔空格、tab、换行、逗号，顿号
		return strs = txtval.split(/\s+|\r|,|，|、/g);
		//console.log(strs);
	}

	//创建节点
	function createSpnode(text) {
		strNode = document.createElement("span");
		strNode.innerHTML = text;
		//给新增节点绑定事件
		strNode.onclick = function(){
            show_txt.removeChild(this);
        }
	}

	//查询
	find_btn.onclick = function () {
		var findT = findtxt.value;//获取查询框内容
		var patt1 = new RegExp(findT);
		//清空上次查询结果
		if (spans) {
			for (var i = 0; i < spans.length; i++) {
				spans[i].style.backgroundColor = '#FFF';
				spans[i].style.color = "#000";
			}
			findflag = false;
		}
		for (var i = 0; i < show_txt.childNodes.length; i++) {
			if(patt1.test(show_txt.childNodes[i].innerHTML)){
				show_txt.childNodes[i].style.backgroundColor = '#F00';
				show_txt.childNodes[i].style.color = "#FFF";
				findflag = true;
			}
		}
		if (!findflag) {
			alert('没有该内容');
		}
	}

	//---给按钮绑定事件---
	//leftIn
	leftIn.onclick = function () {
		var txtStr = splitString();
		for (var i = 0; i < txtStr.length; i++) {
			createSpnode(txtStr[i]);
			show_txt.insertBefore(strNode,show_txt.childNodes[0]);
		}
		//arr.unshift(str);
		//show_txt.insertBefore(strNode,show_txt.childNodes[0]);
	}
	//rightIn
	rightIn.onclick = function () {
		var txtStr = splitString();
		for (var i = 0; i < txtStr.length; i++) {
			createSpnode(txtStr[i]);
			show_txt.appendChild(strNode);
		}
		//arr.push(str);
		//show_txt.appendChild(strNode);
	}
	//leftOut
	leftOut.onclick = function () {
		if (!show_txt.childNodes[0]) {
			alert('您还没有输入任何内容');
			return false;
		}
		//arr.shift(arr[arr.length - 1]);
		show_txt.removeChild(show_txt.childNodes[0]);
	}
	rightOut.onclick = function () {
		if (!show_txt.childNodes[0]) {
			alert('您还没有输入任何内容');
			return false;
		}
		//arr.pop(arr[arr.length - 1]);
		var lastNode = show_txt.lastChild;
		show_txt.removeChild(lastNode);
	}
}