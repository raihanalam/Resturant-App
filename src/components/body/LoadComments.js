import React from 'react';
import { Card } from 'reactstrap';
import dateFormat from 'dateformat';

function LoadComments(props) {
  return (
     props.comments.map(comment =>{
          return(
              <Card style={{marginTop :'5px', padding:'5px'}}>
                <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comments}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm ds,yyyy, h:MM TT")}</p>
               </div>
              </Card>

          );
     })
  );
}

export default LoadComments;
