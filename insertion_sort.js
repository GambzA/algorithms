/**
 * check if the left integer is bigger, if bigger then swap, until
 * it reacher a smaller integer
 */
    //       3  12
var arr = [5,12,3,1,2,6,21,-2,22,65,4,34,98,-3,-5]

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var key = arr[i];
        var j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort(arr));