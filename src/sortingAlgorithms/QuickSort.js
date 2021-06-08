export function getQuickSortAnimations(array) {
    const animations = [];
    const index = [];
    if (array.length <= 1) return array;
    doQuick(array, 0, array.length - 1, animations, index);
    const combine = [animations, index];
    return combine;
  }

function partition(array, start, end, animations, index) 
	{ 
		let pivot = array[end]; 
		let i = (start - 1); // index of smaller element 
		for (let j = start; j < end; j++) 
		{ 
			// If current element is smaller than or 
			// equal to pivot 
			if (array[j] <= pivot) 
			{ 
				i++; 
				// swap arr[i] and arr[j] 
                let temp = array[i]; 

                animations.push([i, j]);
                animations.push([i, j]);
                animations.push([array[i], array[j]]);
                index.push([i, j]);
                index.push([i, j]);
                index.push([i, j]);

				array[i] = array[j]; 
				array[j] = temp; 
			} 
		} 
        // swap arr[i+1] and arr[end] (or pivot) 
        let temp = array[i + 1]; 

        animations.push([i + 1, end]);
        animations.push([i + 1, end]);
        animations.push([array[i+1], array[end]]);

        index.push([i + 1, end]);
        index.push([i + 1, end]);
        index.push([i + 1, end]);

		array[i + 1] = array[end]; 
		array[end] = temp; 
		return i + 1; 
    }
    
function doQuick(array, start, end, animations, index) {
	if (start < end) 
	{ 
		/* pi is partitioning index, arr[pi] is 
        now at right place */
        let pi = partition(array, start, end, animations, index); 
		// Recursively sort elements before 
		// partition and after partition 
        doQuick(array, start, pi - 1, animations, index); 
        doQuick(array, pi + 1, end, animations, index);
    }  
}
