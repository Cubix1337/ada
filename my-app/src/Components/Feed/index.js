import React from "react";
import styled from "styled-components";

const FeedCont = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FeedItem = styled.div`
  margin: 1rem auto;
  padding: 1rem;
  background: white;
  color: black;
  border: 2px solid rgb(240, 240, 240);
  border-left: 5px solid rgb(108,184,231);
  text-align: left;
`;

const FeedDescription = styled.p`
transition:1s;  
:hover{
    padding-left: 20px;
}
`

const Feed = props => {
  const { feedData } = props; //props.feedData
  console.log(feedData);
  return (
    <FeedCont>
      {feedData.map((feedDataObjectItem, i) => (
        <FeedItem key={i}>
          <h2>{feedDataObjectItem.title}</h2>
          <FeedDescription>{feedDataObjectItem.description}</FeedDescription>
        </FeedItem>
      ))}
    </FeedCont>
  );
};

// class Feed extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         mouseX: 0,
//         mouseY: 0
//       };
//     }

//     render() {
//         return (<Blah>Oooo, pretty spinny thingy!</Blah>)
//     }

// }

export default Feed;
