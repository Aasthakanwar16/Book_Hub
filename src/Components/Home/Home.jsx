import React from 'react';
import './Home.css';
import imageSrc from '../images/h1.jpg';
import imageSrc1 from '../images/h7.avif';
import imageSrc2 from '../images/h5.jpg';

const Home = () => {
    return (
        <div className='Home'>
            <h1>WELCOME TO BOOKS_HUB</h1>
            <p>The Platform provides study material for Computer Science students</p>
            <button>EXPLORE-MYBOOK</button>
        </div>
    );
}

const Component1 =() => {
return(
    <div className='hint1'>
        <h2> Bachelor of Computer Applications </h2>
    </div>
)
}
import { Link } from 'react-router-dom';
const Component2 = () => {
    return (
        <div className='hint'>
       <p>1st-year subjects in the BCA course cover various topics related to computer science and applications,
                 such as programming, data structures, algorithms, databases, computer networks, and software development. 
                 The course is designed to provide students with a strong foundation in the field of computer science and to prepare them
                  for careers in software development,programming,<Link to="/bca-1-download" >
                   <button>BCA-1</button></Link></p>  
        <img src={imageSrc} alt="BCA image" className="bca-image"/>
           </div>
        );}

const Component3 = () =>{
    return (
        <div className='hint2'>
                 <p>BCA 2nd year syllabus consists of subjects such as Data Structures, Database Management Systems, Software Engineering,
                     Open Source Technology, Introduction to Linux and Practicals. BCA students will get hands-on experience through labs, projects,
                   
<Link to="/bca-2-download" >
                   <button>BCA-2</button></Link></p>  
        <img src={imageSrc1} alt="BCA2 image" className="bca2-image"/>

        </div>
    )
}

const Component4 = () =>{
    return (
        <div className='hint3'>
                 <p>
                 BCA full form, Bachelor of Computer Applications is an undergraduate course of 3 years that deals with various aspects of 
                 computer science and its applications in the real world. BCA Subjects focuses on training individuals for the ever-changing world of IT and Computer applications. 
                 BCA subjects involve programming knowledge, 
                 developing applications, Analytical Thinking, and creativity.
<Link to="/bca-2-download" >
                   <button>BCA-3</button></Link></p>  
        <img src={imageSrc2} alt="BCA3 image" className="bca3-image"/>

        </div>
    )
}

const HomeWithComponent2 = () => {
    return (
        <div>
            <Home />
            <Component1 />
            <Component2 />
            <Component3 />
            <Component4 />
        </div>
    );
}

export default HomeWithComponent2;



