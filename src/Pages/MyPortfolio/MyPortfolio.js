import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
        <div style={{margin :"100px"}} >
            <h4 className='text-3xl '>My Name is <span className='text-primary'>Muhammad Forhad</span>, and i'm a BBA Professional student from Siddeswari degree collage </h4>
            <h6 className='mt-4'>Previous i'm doing a Business.Doing it more than 1.5 year and working some other places & company.But few month ago I'm to much interested on web development.Watching videos on youtube and doing some little project gives me fun. </h6>
                <h6>In future i decided to be a professional web developer working on a software company.  </h6>
                <p className='text-primary text-xl pt-3' >My Skills : </p>
                <p className='text-xl pt-3'>Html5&Css3, Js ES6, React, Sass, TailwindCSS, React Bootstrap, Firebase, NodeJs etc.</p>
            </div>
            <div className='lg:pl-24 pb-24'>
                <button class="btn btn-secondary">
                   <a href="https://bicycle-assignment.web.app/."> Project 1</a> 
                </button>
                <button class="btn btn-info ml-5">
                   <a href="https://profound-pothos-792e1e.netlify.app/."> Project 2</a> 
                </button>
                <button class="btn btn-success ml-5">
                   <a href="https://scintillating-jalebi-c02cab.netlify.app/"> Project 3</a> 
                </button>
                
                
            </div>
        </div>
    );
};

export default MyPortfolio;