export function getBubbleSortAnimations(array) {
    const animations = [];
    const index = [];
    if (array.length <= 1) return array;
    doBubble(array, animations, index);
    const combine = [animations, index];
    return combine;
  }


function doBubble(mainArray,  animations, index) {
    let sorted = false,
        round = 0;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < mainArray.length - 1 - round; i++) {
            if (mainArray[i] > mainArray[i + 1]) {
                animations.push([i, i + 1]);
                animations.push([i, i + 1]);
                animations.push([mainArray[i], mainArray[i + 1]]);
                let temp = mainArray[i];
                mainArray[i] = mainArray[i + 1];
                mainArray[i + 1] = temp;
                index.push([i, i + 1]);
                index.push([i, i + 1]);
                index.push([i, i + 1]);
                sorted = false;
            }
        }
        round++;
  }

}