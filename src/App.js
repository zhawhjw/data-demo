import React from 'react';
import Tiles from './Tiles'
import ExtractData from "./data/extracted.json"
import './App.css';


// process.env.PUBLIC_URL

function readJSON(){
  return ExtractData.map((val, i) => val);
}

let data = [];

const data_array = readJSON();

data_array.forEach((row)=>{

  if(!String(row.Name).includes("Frank")){
    data.push({
      // id:0,
      name:row.Name,
      image: "/images/" + row.Name + "_0.gif"
    });
  }

});
console.log(data);

// eslint-disable-next-line array-callback-return
let filteredData = data.filter((x) => {
  if(String(x.name).includes("Sword_Shield")){
    x.name = x.name.replace("Sword_Shield", "Sword&Shield");
    x.image = x.image.replace("Sword_Shield", "Sword&Shield");
  }

  if(String(x.name).includes("Sword_Attack_SP_RLd")){
    x.name = x.name.replace("Sword_Attack_SP_RLd", "Sword_Attack_Sp_RLd");
    x.image = x.image.replace("Sword_Attack_SP_RLd", "Sword_Attack_Sp_RLd");
  }
  return x;
});

console.log(filteredData);



// const data = [
//   {
//     id: 1,
//     name: "hi",
//     image: "/images/2Hand-Sword-Attack1_0.gif"
//   },
//
// ];


class Dashboard extends React.Component {
  render() {
    return (
        <Tiles data={this.props.data} />
    );
  }
}

function App() {
  return (
    <Dashboard data={filteredData} />
  );
}

export default App;
