function vetor(arr) {
    var numbers = arr;
    numbers = numbers.sort(
        function (a, b) { 
        return a - b 
        });

    console.log(numbers);
    var length = numbers.length;

    if (length % 2 == 1) {
        console.log(numbers[(length / 2) - .5])
        return numbers[(length / 2) - .5]
    }
}

n =  [1, 5, 3, 4, 2]
vetor(n)