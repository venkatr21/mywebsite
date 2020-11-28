import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
function Proj (props){
  const proj=[
    {
      pname: "Vision - The blind assist",
      image: require('./images/vision.jpeg'),
      type:"AI based Mobile Application",
      desc: "A mobile based, blind friendly application that features realtime functions such as situation analysis, text analysis and location guidance in an interactive way to help blind assert their surrounding."
    },
    {
      pname: "GreenTag - Promoting Swacch bharat",
      image:require('./images/iot.png'),
      type:"IoT based Cloud Application",
      desc:"Uses IoT and harnesses the power of Cloud to provide a innovative and feasable solution to promote Swachh Bharat Campaign and create environment awareness to manage waste effectively."
    },
    {
      pname: "Sci-R - The Scilab R toolbox",
      image: require('./images/scir.jpeg'),
      type:"Scilab R interface with C",
      desc:"Sci-R is a toolbox in Scilab which was built as a part of Scilab Toolbox Hackathon, integrates R with Scilab and allows ease usage of all statistical functions of R within Scilab seamlessly and effectively. "
    },
    {
      pname: "Resource HUB - College Repository",
      image: require('./images/collegerepository.png'),
      type:"Full Stack WebDev",
      desc: "Built a full stack web application called ResourceHUB to feature all resource sharing like Question Papers, Logs, Queries powered by JQuery along with PHP and mySQL database."
    },
    {
      pname: "2D Plotter using Arduino",
      image: require('./images/2dplotter.PNG'),
      type:"Arduino and Matlab Simulink",
      desc:"This uses Ultrasonic distance sensor to map 2-d space and visualise it. Tools used: Arduino with ultrasonic distance sensor, Matlab Simulink"
    },
    {
      pname: "My Personal Website",
      image: require('./images/mywebsite.PNG'),
      type:"FrontEnd UI - ReactJS",
      desc:"Yes this is the one which you're seeing right now. This just took a bit of curiosity and a days' time to build using ReactJS as a learners project."
    }

  ];
  const item = proj.map((info) =>{
    return(
      <div align="center" class="col-lg-4 col-md-6 col-sm-10 projectdiv">
      <Card style={{height:"490px"}}>
        <CardBody>
          <CardTitle><span id= 'cardprojname'>{info.pname}</span></CardTitle>
          <CardSubtitle><p className="lead">{info.type}</p></CardSubtitle>
        </CardBody>
        <CardImg width="100%" height="220px" src={info.image} alt={info.image} />
        <CardBody>
          <CardText>{info.desc}</CardText>
        </CardBody>
        <br/>
      </Card>
      <br/>
      </div>
    );
  });
  return(
    <div class="projectdiv">
    <center><h2 className="heading"><span>My Projects</span></h2></center>
    <br />
    {item}
    </div>
  )
}
export default Proj;
