export function getHeapSortAnimations(array) {
    const animations = [];
    const index = [];
    if (array.length <= 1) return array;
    doHeap(array, animations, index);
    const combine = [animations, index];
    return combine;
  }


function doHeap(array, animations, index) {
// Heap Sort in Java
      let n = array.length;

      // Build max heap
      for (let i = Math.floor((n / 2) - 1); i >= 0; i = i - 1) {
        heapify(array, n, i, animations, index);
      }

      // Heap sort
      for (let i = n - 1; i >= 0; i = i - 1) {

        animations.push([0, i]);
        animations.push([0, i]);
        animations.push([array[0], array[i]]);

        index.push([0, i]);
        index.push([0, i]);
        index.push([0, i]);

        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
  
        // Heapify root element
        heapify(array, i, 0, animations,index);
      }
}

    function heapify(array, n, i, animations, index) {
      // Find largest among root, left child and right child
      let largest = i;
      let l = (2 * i) + 1;
      let r = (2 * i) + 2;
  
      if (l < n && array[l] > array[largest])
        largest = l;
  
      if (r < n && array[r] > array[largest])
        largest = r;
  
      // Swap and continue heapifying if root is not largest
      if (largest !== i) {
        let temp = array[i];

        animations.push([i, largest]);
        animations.push([i, largest]);
        animations.push([array[i], array[largest]]);

        index.push([i, largest]);
        index.push([i, largest]);
        index.push([i, largest]);

        array[i] = array[largest];
        array[largest] = temp;
  
        heapify(array, n, largest, animations, index);
      }
    }
    
