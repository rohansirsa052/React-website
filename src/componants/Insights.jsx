import React from 'react'
import styled from 'styled-components'
import { Button } from "../styls/Button";
const Insights = () => {
  return (
   <React.Fragment>
   
   <Wrapper>
    <div className="c">
    <h3 style={{"color": "black"}}>Insights</h3>

    <div className='grid1'>
   
    <div className="row">

    <div className="card"> <h2>News and events</h2>
    <div className="heading">
    <h1>ThoughtFocus joins the Professional Background Screening</h1>
    </div>
    <Button className="btn">Read More</Button>

    </div>
    <div className="card3"> <h2  style={{"color": "black", "fontSize": "2rem"}}>BLOG</h2>
    <div className="heading">
    <h1  style={{"color": "black"}}>8 Keys to Preventing Sabotage of your Ability for IT Innovation</h1>
    </div>
    <Button className="btn2">READ THE BLOG</Button>

    </div>

    </div>
    

    <div className="row">
   
    <div className="card3"> <h2  style={{"color": "black", "fontSize": "2rem"}}>PODCASTS</h2>
    <div className="heading">
    <h1  style={{"color": "black"}}>Conversations with Thought Leaders</h1>
    </div>
    <Button className="btn2">LISTEN TO PODCAST</Button>
    </div>
    <div className="card4"> <h2>SUCCESS STORIES</h2>
    <div className="heading">
    <h1>Driving massive cost savings for a global investment management firm </h1>
    </div>
    <Button className="btn">Read More</Button>
    </div>

    </div>
   

    </div>
    
    
    
    </div>
   



   </Wrapper>




   </React.Fragment>
  )
}
const Wrapper = styled.section`
        .c{
          margin-top: 8rem;
            height: 130vh;
            width: 100vw;
            background-color: rgb(227, 227, 227);
        }
        
        .grid1{
          height: 100%;
          width: 100%;
         
          margin-bottom: 2rem;
          margin-left: 3rem;
          margin-right: 6rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        h1{
            display: inline;
            color: white;
           
            font-size: 3.5rem;
           
            font-weight: 400;
          
            font-family: "Bree Serif", serif;
          }
          .heading{
            margin: 2rem;
          }
          h2{
           
            text-align: left;
            font-size: 2.5rem;
            color: white;
            margin: 2rem;
            font-family: "Bree Serif", serif;
          }
          h3{
            margin-left: 3rem;
            font-size: 4.5rem;
            padding-left: 3rem;
            padding-top: 4rem;
            font-family: "Bree Serif", serif;
            font-weight: bold;
          }
          .row{
            margin-bottom: 10rem;
            margin-top: 2rem;
             display: grid;
             grid-template-rows: repeat(2,1fr);
          }
          .card{
            margin-top: 2rem;
            margin-bottom: -2rem;
            margin-left: 3rem;
            margin-right: 2rem;
            height: 45vh;
            width: 43vw;

            background:url("https://wallpapercave.com/dwp2x/wp5234042.jpg");
          }
          .card4{
            margin-top: 2rem;
            margin-bottom: -2rem;
            margin-left: 3rem;
            margin-right: 2rem;
            height: 45vh;
            width: 43vw;
            background-image:url("https://wallpapercave.com/dwp2x/wp12520106.jpg") ;
          }
          .card3{
            margin-top: 2rem;
            margin-bottom: -2rem;
            margin-left: 3rem;
            margin-right: 2rem;
            height: 45vh;
            width: 43vw;
            background-color: white;
          }
          .btn {
            margin-left: 2rem;
            margin-top: 2rem;
            background-color: rgb(0 0 0 / 0%);
            border: 0.1rem solid #7df957;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 1.4rem;
            font-family: "Bree Serif", serif;
      
            &:hover {
              background-color: #7df957;
              color: black;
              font-weight: bold;
            }
          }

          .btn2{
              margin-left: 2rem;
              background-color: black;
              border: 0.1rem solid black;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              font-size: 1.4rem;
              font-family: "Bree Serif", serif;
        
              &:hover {
                
                color: #7df957;
                font-weight: bold;
              }
            }
          
        
`
export default Insights
