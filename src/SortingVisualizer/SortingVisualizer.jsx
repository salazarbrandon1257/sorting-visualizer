import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/MergeSort.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/BubbleSort.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/QuickSort.js';
import {getHeapSortAnimations} from '../sortingAlgorithms/HeapSort.js';
import {getInsertionSortAnimations} from '../sortingAlgorithms/InsertionSort.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 219;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#64ffda';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export const setArrayBarNumberOut = {

};


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      arrayBarNumber: NUMBER_OF_ARRAY_BARS,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray(arrayBarNumber =this.state.arrayBarNumber) {
    const array = [];
    const arrayBars = document.getElementsByClassName('array-bar');

    console.log(arrayBarNumber);
    console.log(arrayBars.length);
    for (let i = 0; i < arrayBarNumber; i++) {
      array.push(randomIntFromInterval(5, 550));
      if (arrayBars.length > 0 && arrayBarNumber === arrayBars.length){
        arrayBars[i].style.backgroundColor= PRIMARY_COLOR;
      }    
    }
    this.setState({array});
    //clears all timeouts, thereby stopping the animations
    clearAllTimeouts();
  }

  setArrayBarNumber() {
//here I will inpout the new number, grabbed from the html onvhange on the other file
    const arrayBarNumber = document.getElementById('dz').getElementsByTagName('span')[9].ariaValueNow;
     console.log(arrayBarNumber);
    //$('.App nav span.MuiSlider-thumb').ariaValueNow;
 
    this.setState({arrayBarNumber : arrayBarNumber}, () => {    console.log(this.state.arrayBarNumber);});
    this.resetArray(arrayBarNumber);
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const combine = getQuickSortAnimations(this.state.array);
    const index = combine[1];
    const animations = combine[0];
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [m, n] = index[i];
          const [leftHeight, rightHeight] = animations[i];
          const leftHeightStyle = arrayBars[m].style;
          const rightHeightStyle = arrayBars[n].style;
          rightHeightStyle.height = `${leftHeight}px`;
          leftHeightStyle.height = `${rightHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  heapSort() {
    const combine = getHeapSortAnimations(this.state.array);
    const index = combine[1];
    const animations = combine[0];
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [m, n] = index[i];
          const [leftHeight, rightHeight] = animations[i];
          const leftHeightStyle = arrayBars[m].style;
          const rightHeightStyle = arrayBars[n].style;
          rightHeightStyle.height = `${leftHeight}px`;
          leftHeightStyle.height = `${rightHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  bubbleSort() {
    const combine = getBubbleSortAnimations(this.state.array);
    const index = combine[1];
    const animations = combine[0];
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [m, n] = index[i];
          const [leftHeight, rightHeight] = animations[i];
          const leftHeightStyle = arrayBars[m].style;
          const rightHeightStyle = arrayBars[n].style;
          rightHeightStyle.height = `${leftHeight}px`;
          leftHeightStyle.height = `${rightHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <div className="buttons-container">
        <button variant="secondary" onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.setArrayBarNumber()}>Merge Sort</button>
        </div>
        </div>
    );
  }
}

function clearAllTimeouts() {
  const highestId = window.setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      window.clearInterval(i);
    }
  }, 0);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}