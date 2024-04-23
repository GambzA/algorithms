/**
 * We compare to values first if the left value is higher we swap it to the right value, the goal is
 * that the higher value is bubbled to the right side to sort.
 */
         //  3  1 2 6 12
var arr = [5,12,3,1,2,6,21,-2,22,65,4,34,98,-3,-5]

function bubbleSort(arr){
    var inc = 0
    for(parLoop = 0; parLoop < arr.length; parLoop++){
        inc = 0;
        while(inc < arr.length){
            if(arr[inc+1] != undefined){
                if(arr[inc] > arr[inc+1]){
                    var swapper = arr[inc+1];
                    arr[inc+1] = arr[inc];
                    arr[inc] = swapper;
                }
            }
            inc++;
        }
    }

    return arr;
}

console.log(bubbleSort(arr));