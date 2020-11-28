import React from 'react';
function Educat (props){
  const edu=[
    {
      year:'2005-2012',
      sch:'Lisieux Matriculation School.',
      place:'Coimbatore',
      qual:null
    },
    {
      year:'2012-2016',
      sch:'Srimathi Sundaravalli Memorial School.',
      place:'Chennai',
      qual:'10/10 CGPA 10th Boards'
    },
    {
      year:'2016-2018',
      sch:'Kola Saraswathi Vaishnav Senior Secondary School.',
      place:'Chennai',
      qual:'476/500 12th Boards'
    },
    {
      year:'2018-present',
      sch:'Vellore Institute Of Technology',
      place:'Chennai',
      qual:'9.52/10 current CGPA'
    }
  ];
  const item = edu.map((info) =>{
    return(
      <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
      <div class="timeline-arrow"></div>
      <h2 class="h5 mb-0">{info.sch}</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>{info.year}</span>
      <p class="text-small mt-2 font-weight-light">{info.place}<br/>{info.qual}</p>
      </li>
    );
  });
  return(
    <div class="col-lg-7 mx-auto educatdiv">
    <center><h2 className="heading"><span>Education</span></h2></center>
    <ul className='timeline'>
    {item}
    </ul>
    </div>
  )
}
export default Educat;
