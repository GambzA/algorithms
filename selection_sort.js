/**
 * Look for the smallest number first, if there is no other number, place the small
 * number to left most. Then recheck again start from the next index.
 */

var arr = [5,12,3,1,2,6,21,-2,22,65,4,34,98,-3,-5]

function selectionSort(arr){
    var inc  = 0;
    var inc2 = 0;
    for(inc; inc < arr.length; inc++){
        var smallest = inc;
        var inc2 = inc+1;
        for(inc2;inc2 < arr.length;inc2++){
            if(arr[inc] > arr[inc2]){
                var swap = arr[inc];
                arr[inc] = arr[inc2];
                arr[inc2] = swap;
            }
        }

    }

    console.log(arr);
}

// console.log(selectionSort(arr));
selectionSort(arr)