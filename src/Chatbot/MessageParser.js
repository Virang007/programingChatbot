import React from 'react';

const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        if (checker === "age") {
            actions.afterNameMessage();
            children.props.state.userData.name = message;
        }

        if (checker === "preference") {
            actions.afterAgeMessage();
            children.props.state.userData.age = message;
            children.props.state.userData.category = "kid";
            
        }
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;