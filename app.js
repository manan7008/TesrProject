
var globalInt;

document.getElementById('drive').addEventListener('click', function() {
    var cleardata;
    clearInterval(globalInt);
    function textplay() {
        var box = document.getElementById('left').value;
        var char = box[0];
        box = box.substring(1, box.length);
        document.getElementById('right').value += char;
        document.getElementById('left').value = box;

        cleardata = box;

    }

    var interval = setInterval(function() {
        textplay();
        if(cleardata == ""){
            var msg = generateP();
            msg.innerHTML = "No more characer to move from leftbox to rightbox";
            document.body.appendChild(msg);
            clearInterval(interval);
        }
    },1000);
    globalInt = interval;
    stopTrasnfer(interval);
});

document.getElementById('rev').addEventListener('click',function() {
    var cleardata;
    clearInterval(globalInt);
    function textplay() {
        var box = document.getElementById('right').value;
        var reverse = box.split("").reverse().join("");
        var char = reverse[0];
        reverse = reverse.substring(1, reverse.length);
        box = reverse.split("").reverse().join("");
        var temp = document.getElementById('left').value;
        temp =  char + temp;
        document.getElementById('left').value = temp;
        document.getElementById('right').value = box;

        cleardata = box;
    }

    var interval = setInterval(function() {
        textplay();
        if(cleardata == "") {
            clearInterval(interval);
            var msg = generateP();
            msg.innerHTML = 'No more character to move from rightbox to leftbox';
            document.body.appendChild(msg);
        }
    },1000);
    globalInt = interval;
    stopTrasnfer(interval);
});

function stopTrasnfer(data) {
    document.getElementById('stop').addEventListener('click' , function() {
        clearInterval(data);
    });
}

function generateP() {
    var msg = document.createElement('p');
    msg.setAttribute('class','gen-msg');
    return msg;
}

