import React from 'react';
import {Jumbotron} from "../../components/Jumbotron/Jumbotron";
import './App.css';
import { ControlledCarousel} from "../../components/ControlledCarousel/ControlledCarousel";
import {SomeInfo} from "../../components/SomeInfo/SomeInfo";
import {RegisterInfo} from "../../components/RegisterInfo/RegisterInfo";


 function App(props) {
     // console.log(props);
     const { match: { url } } = props;
  return (
    <div>
        <Jumbotron path={url}/>
        <SomeInfo/>
        <ControlledCarousel/>
        <RegisterInfo/>
    </div>
  );
}
export default App;
