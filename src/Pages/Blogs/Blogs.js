import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center px-10  m-5'>
            <p className='text-primary text-xl'>How will you improve the performance of a React Application</p> 
            <p>Ans: Keeping component state local where necessary.Memoizing React components to prevent unnecessary <br /> re-renders Code splitting in React using dynamic import() Windowing or list virtualization in React.Lazy loading images in React.</p>
            <p className='text-primary text-xl pt-5'>What are the different ways to manage a state in a React application?</p>
            <p>Ans: There are four main types of state you need to properly manage in your React apps:Local state,Global state,Server state,URL state.
            </p>
            <p className='text-primary text-xl pt-5'>How does prototypical inheritance work?</p>
            <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
            <p className='text-primary text-xl pt-5'> What is a unit test? Why should write unit tests?</p>
            <p>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly. The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>
            <p className='text-primary text-xl pt-5'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
            <p className='pb-10'>Select Product By Search allows you to do a text search and find all products in which a specific string appears.You can perform a search across all existing nomenclatures.For example a search on Textiles will do a search on all existing nomenclatures and find all items in which the word "Textile" appears. Type Textile in the Search Text box and click on Search button. The system finds all products with the text "Textile" in it. Now, you can use the scrollbar to view all the products and place a check mark in check boxes to the left of each product. Finally, click on OK. The selected products from the search panel will be added to the Products dimension.</p>
        </div>
    );
};

export default Blogs;