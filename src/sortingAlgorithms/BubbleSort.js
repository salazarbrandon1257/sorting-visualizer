export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function bubbleSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    bubbleSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    bubbleSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doBubble(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }

    function doBubble(
        mainArray,
        startIdx,
        endIdx,
        auxiliaryArray,
        animations,
    ) {
    let sorted = false,
        round = 0;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1 - round; i++) {
        animations.push([i, i + 1]);
        if (array[i] > array[i + 1]) {
            animations.push([i, i + 1, true]);
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            sorted = false;
            animations.push(array.slice(0));
            animations.push([]);
        }
        }
        animations.push([true, array.length - 1 - round]);
        round++;
  }
  
}