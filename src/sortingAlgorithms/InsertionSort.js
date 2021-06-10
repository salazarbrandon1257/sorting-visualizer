export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    doInsertion(array, animations);;
    return animations;
  }


function doInsertion(array, animations) { 
        let n = array.length; 
        for (let i = 1; i < n; ++i) { 
            let key = array[i]; 
            let j = i - 1; 
  
            /* Move elements of arr[0..i-1], that are 
               greater than key, to one position ahead 
               of their current position */
            while (j >= 0 && array[j] > key) { 

                animations.push([j , j + 1]);
                animations.push([j , j + 1]);
                animations.push([j +1 , array[j]]);

                array[j + 1] = array[j]; 
                j = j - 1; 
            }

            animations.push([j + 1 , i]);
            animations.push([j + 1 , i]);
            animations.push([j + 1, key]);
    
            array[j + 1] = key; 
        } 
        
}