import React from 'react';
import { Card } from 'reactstrap';
import dateFormat from 'dateformat';

function LoadComments(props) {
  return (
    props.comments.map(comment => {
      return (
        <div key={comment.id}>
        <Card style={{ marginTop: '5px', padding: '5px' }}>
          
            <h5>{comment.author}</h5>
            <p>{comment.comments}</p>
            <p>Rating: {comment.rating}</p>
            <p>{dateFormat(comment.date, "dddd, mmmm ds,yyyy, h:MM TT")}</p>
          
        </Card>
        </div>

      );
    })
  );
}

export default LoadComments;
