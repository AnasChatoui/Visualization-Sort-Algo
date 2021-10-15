import React, { Component } from "react";
import "./Sortalgo.css";
import { Button, Paper ,Typography} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import { getMergeSortAnimations } from "./SortingAlgo";
import { SelectionSortAnimations } from "./SortingAlgo";
const NUMBER_BARS = 50;
const SECONDARY_COLOR = '#f68a2a';
const PRIMARY_COLOR = '#00514e';

export default class Sortalgo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }
  componentDidMount() {
    const array = setArray();
    this.setState({ array });
  }
  Reset(e) {
    const array = setArray();
    this.setState({ array });
    // Need to clearTimeout(setTimout)
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
        }, i * this.props.time);
      }
       else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.props.time);
      }
    }
  }
  SelectionSort(){
    const length = this.state.array.length
    const {animations,translation} = SelectionSortAnimations(this.state.array,length);
    for(let i =0; i<animations.length;i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      if (true) {  
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.props.time);
      }
    }
    for(let i =0; i<translation.length;i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      if (true) {  
        setTimeout(() => {
          console.log(translation[i])
          const [barOneIdx, newHeight] = translation[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.props.time);
      }
    }
  }
  // Visual() {
  //   const { array } = this.state;

  //   for (let i = 0; i < NUMBER_BARS; i++) {
  //     let x = document.getElementById(`Bar-${i}`);
  //     setTimeout(() => {
  //       x.style.backgroundColor = "#00348e";
  //     }, i * this.props.time);
  //   }

  //   // console.log(arrayBars)
  //   // for(let ele in elet[0]){
  //   //     console.log("----->",ele)
  //   // }
  // }

  render() {
    const { array } = this.state;
    return (
      <>
        <div style={{display:"flex",justifyContent:"space-evenly",alignItems:'center', textAlign: "center", marginTop: "10px ",marginBottom:'10px' }}>
          <Typography
                style={{ color: "#3f3d56" }}
                variant="h3"
                noWrap
              >
                Visualising : {this.props.algo} Algorithm
              </Typography>
          <div>
          <Button
            onClick={()=>{
              if(this.props.algo === "Mergesort"){
                this.mergeSort()
              }else if(this.props.algo === "SelectionSort"){
                this.SelectionSort()
              }
            }}
            style={{ color: "#39374e" }}
            aria-label="add"
          >
            <PlayArrowIcon style={{ width: "30px", height: "30px" }} />
          </Button>
          <Button
            onClick={() => this.Reset()}
            style={{ color: "#39374e" }}
            aria-label="add"
          >
            <ReplayIcon style={{ width: "30px", height: "30px" }} />
          </Button>
          </div>
        </div>
        <Paper  elevation={3} style={{postion:'absoslute',height: "100%", padding: "2em",textAlign :'center' }}>
            {array.map((value, idx) => (
              <div
                className="array-bar"
                id={`Bar-${idx}`}
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                  width: `${this.props.taille}px` || '15px',
                  marginRight: "2px",
                }}
              ></div>
            ))}
        </Paper>
      </>
    );
  }
}
function setArray() {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  var array = [];
  for (let i = 0; i < NUMBER_BARS; i++) {
    array.push(randomInt(30, 200));
  }

  return array;
}