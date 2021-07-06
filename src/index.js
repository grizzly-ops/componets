import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> <div> <h4>WARNING!!!!</h4> Are you sure you want to do this </div></ApprovalCard>
            <ApprovalCard> <CommentDetail author="sammywammi" timeAgo="Today at 3:03AM" comment="nice video man great stuff" avatar={faker.image.avatar()} /> </ApprovalCard>
            <ApprovalCard> <CommentDetail author="jessithemessyqueen" timeAgo="Today at 12:00PM" comment="very informative thank you" avatar={faker.image.avatar()} /> </ApprovalCard>
            <ApprovalCard> <CommentDetail author="thatoneguy" timeAgo="Today at 7:00AM" comment="bro this video was terrible check my page way better" avatar={faker.image.avatar()} /> </ApprovalCard>
        </div>

    );
};

ReactDom.render(<App />, document.querySelector('#root'))