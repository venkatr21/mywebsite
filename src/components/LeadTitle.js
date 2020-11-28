import React from 'react';
import {
  Jumbotron,Button
} from 'reactstrap';
const Leadtitle = (props) => {
  return (
    <div id='leadtitle'>
      <Jumbotron align='center'>
        <h1 className="display-3">Venkat Ragavan</h1>
        <p className="lead">Computer Science Student, passionate about programming, design and AI.</p>
        <hr className="my-2" />
        <br/>
        <p className="lead">
        <a href='https://api.whatsapp.com/send?phone=+919962722146' target='_blank' rel='noopener noreferrer'>
          <Button color="primary">Get in touch?</Button>
        </a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Leadtitle;
