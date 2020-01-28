import React from 'react'
// This is used for smaller components like navigation and blog posts
// const About = () => {
//     return (
//     <h1>Hello World - {2 + 3}</h1>
//     )
// }

// const About = () => {
//         const hell = "HlllYa";
//         return React.createElement('div', null, `A react project ${hell}`);
// }

// This is used for big and non-resuable components
class About extends React.Component {
    render(){
        return (
            <h1>HellO World</h1>
        );
    }
}

export default About