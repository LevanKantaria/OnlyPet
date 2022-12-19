import React from "react";
import styled from "styled-components";
import FeatureCard from "../FeatureCard/FeatureCard";


const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 100px;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin: 48px auto;

    @media (max-width: 1024px) {
        grid-template-columns: auto ;
        justify-content: space-around;
  }
`
const FeatureList = () => {

  const open = (url:string) =>{
    window.open(url)
  }
  return (
    <Grid>        
      <FeatureCard label="Buy / Sell" icon="/assets/pet-shop.png" onClick={()=>window.open('https://google.com')} />
      <FeatureCard label='Pet Food' icon="/assets/pet-food.png" />
      <FeatureCard label='Pet Clothes' icon="/assets/cat-cloth.png" />
      <FeatureCard label="Missing Pets"  icon="/assets/wanted.png"/>
      <FeatureCard label="Grooming"  icon="/assets/grooming.png" />
      <FeatureCard label="Vet Clinics" icon="/assets/clinic.png" />
      <FeatureCard label="peTinder" icon="/assets/pet-care.png" />
      <FeatureCard label="Events" icon="/assets/planner.png" />
      <FeatureCard label="Blog" icon="/assets/blogging.png" />      
    </Grid>
  );
};

export default FeatureList;
