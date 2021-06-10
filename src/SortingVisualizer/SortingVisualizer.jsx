import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/MergeSort.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/BubbleSort.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/QuickSort.js';
import {getHeapSortAnimations} from '../sortingAlgorithms/HeapSort.js';
import {getInsertionSortAnimations} from '../sortingAlgorithms/InsertionSort.js';
import './SortingVisualizer.css';
import Slider from '@material-ui/core/Slider';
import { isMobile } from 'react-device-detect';

//testing
//const isMobile = true;

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = isMobile ? 3 : 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = isMobile ? 42 : 170;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#64ffda';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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

    for (let i = 0; i < arrayBarNumber; i++) {
      const pixelHeight = isMobile ? 300 : 550; 
      array.push(randomIntFromInterval(5, pixelHeight));
      if (arrayBars.length > 0 && arrayBarNumber === arrayBars.length){
        arrayBars[i].style.backgroundColor= PRIMARY_COLOR;
      }    
    }
    this.setState({array});
    //clears all timeouts, thereby stopping the animations
    clearAllTimeouts();
  }

  resetArrayColors() {
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor= PRIMARY_COLOR;
    }
  }

  setArrayBarNumber() {
    var arrayBarNumber = NUMBER_OF_ARRAY_BARS;
    //here I will inpout the new number, grabbed from the html onvhange on the other file
    if (document.getElementById('dz2')){
      const index = isMobile ? 7 : 9;
      arrayBarNumber = document.getElementById('dz2').getElementsByTagName('span')[index].ariaValueNow;
      this.setState({arrayBarNumber : arrayBarNumber});
      this.resetArray(arrayBarNumber);
    }
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
    this.resetArrayColors();
    return (

      <div className="array-container" style={isMobile ? {top : '175px'}: {top : '100px'}}>
        <div id="dz2" className="visualizer-container" >                        
        <Slider
          id="dz2"
          defaultValue={NUMBER_OF_ARRAY_BARS}
          onChangeCommitted={() => this.setArrayBarNumber()}
          aria-labelledby="discrete-slider"
          step={isMobile ? 11 : 40}
          marks
          min={isMobile ? 20 : 10}
          max={isMobile ? 53 : 210}
          style={isMobile ? {top : '80px'}: {top : '15px'}}
          /></div>
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
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
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