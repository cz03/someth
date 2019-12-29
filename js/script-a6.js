let i = 0;
let $result = $(".result");
function init() {
	$("input[type=checkbox]").change(trackCheck);
	$("input[type=radio]").change(trackRadio);
	console.log("скрипт подгрузился.");

    trackCheck();
    
    $("#my-carousel").carousel();
    increasBarBy1();
    increasBarBy3();
    increasBarBy7();
}

const maxAllowedChecks = 2;

function trackCheck() {
	let checkCount = $("input[type=checkbox]:checked").length;
	$("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowedChecks);
}

function trackRadio() {
	$("input[type=radio]").prop("disabled", true);
}

function increasBarBy1() {
	$("#btn0").click(function() {
		i = i + 1;
	    $('#progress-bar').width(i +'%');
	    checkBar();
	})
}

function increasBarBy3() {
	$("#btn1").click(function() {
		i = i + 3;
	    $('#progress-bar').width(i +'%');
	    checkBar();
	})
}

function increasBarBy7() {
	$("#btn2").click(function() {
		i = i + 7;
	    $('#progress-bar').width(i +'%');
	    checkBar();
	})
}

function checkBar() {
	if (i < 100) {
		console.log(i);
		$result.html(i + '%');
	} else {
		$result.css('color', 'green')
		$result.html("Полом!");
	}
}

function progress() {
	var prg	=	document.getElementById("progress");
	var percent = document.getElementById("percentCount");
	var counter = 5;
	var progress = 25;
	var id = setInterval(frame, 50);
	function frame() {
		if (progress == 500 && counter ==100) {
			clearInterval(id);
		} else {
			progress += 5;
			counter += 1;
			prg.style.width = progress + "px";
		percent.innerHTML = counter + "%";
		}
	}
};

$(document).ready(init);
