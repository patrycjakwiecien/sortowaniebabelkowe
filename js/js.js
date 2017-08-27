'use script';

function bubbleSort(input) {

    var ile = input.length; //15

    /*for(var j=0; j < ile - 1; j++){ //ile-1 o jeden mniej niz dlugos tablicy, bo zaczyna liczyc od zera czyli j < 14, bo indexy liczymy od zera
         if 
         */

    do {
        for (var i = 0; i < ile - 1; i++) {
            if (input[i] > input[i + 1]) {
                var tymczasowa = input[i];
                input[i] = input[i+1];
                input[i+1] = tymczasowa; //to co po prawej ma byc po lewej
            }
        }
        ile--;
    }while (ile > 1);
    
    return input;
}




var arr = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.20, 78, 34, 1e2, 45, 67, 98, 1];

console.log("Array: " + arr);
console.log("Sorted: " + bubbleSort(arr));