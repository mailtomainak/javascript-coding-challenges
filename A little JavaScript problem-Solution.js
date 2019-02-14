//Util methods
function* range(start, end) {
    while (start <= end) {
        yield start;
        start++;
    }
}


function* map(numbers, fn) {
    for (const v of numbers) {
        yield fn(v);
    }

}


function* reverse(numbers) {
    let initSeq = "";
    let temp = "";
    for (let v of numbers) {
        initSeq += v + ',';
    }
    initSeq = ',' + initSeq;
    for (var i = initSeq.length - 1; i >= 0; i--) {
        const char = initSeq.charAt(i);
        if (char == ',') {
            if (temp !== "") {
                yield parseInt(temp);
                temp = "";
            }
        } else {

            temp = `${char}${temp}`;

        }
    }

}

function foreach(numbers, fn) {
    for (const k of numbers) {
        fn(k);
    }
}

//problem test methods
var numbers = range(1, 10);
numbers = map(numbers, function(n) {
    return n * n;
});
numbers = reverse(numbers);
foreach(numbers, console.log);
