import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// components
import Footer from './Footer.js';

// css

// const ErrorPage = () => {
//     // Create a state variable that holds the position of the header
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   // Create a state variable that holds the size of the header
//   const [size, setSize] = useState({ width: 100, height: 100 });
//   // Create a state variable that holds the position of the mouse
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [mouseClickPosition, setMouseClickPosition] = useState({ x: 0, y: 0 });
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [mouseClickSize, setMouseClickSize] = useState({ width: 0, height: 0 });
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [mouseClickPositionOffset, setMouseClickPositionOffset] = useState({
//     x: 0,
//     y: 0
//   });
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [mouseClickSizeOffset, setMouseClickSizeOffset] = useState({
//     width: 0,
//     height: 0
//   });
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [isDragging, setIsDragging] = useState(false);
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [isResizing, setIsResizing] = useState(false);
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [isResizingTop, setIsResizingTop] = useState(false);
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [isResizingRight, setIsResizingRight] = useState(false);
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [isResizingBottom, setIsResizingBottom] = useState(false);
//   // Create a state variable that holds the position of the mouse when the user clicks
//   const [isResizingLeft, setIsResizingLeft] = useState(false);

//   // Create a function that handles the mouse move event
//   const handleMouseMove = event => {
//     // Set the mouse position state
//     setMousePosition({ x: event.clientX, y: event.clientY });
//     // If the user is dragging
//     if (isDragging) {
//       // Set the position state
//       setPosition({
//         x: mousePosition.x - mouseClickPositionOffset.x,
//         y: mousePosition.y - mouseClickPositionOffset.y
//       });
//     }
//     // If the user is resizing
//     if (isResizing) {
//       // Set the size state
//       setSize({
//         width: mousePosition.x - mouseClickSizeOffset.width,
//         height: mousePosition.y - mouseClickSizeOffset.height
//       });
//     }
//   };

//   // Create a function that handles the mouse down event
//   const handleMouseDown = event => {
//     // Set the mouse click position state
//     setMouseClickPosition({ x: event.clientX, y: event.clientY });
//     // Set the mouse click position offset state
//     setMouseClickPositionOffset({
//       x: event.clientX - position.x,
//       y: event.clientY - position.y
//     });
//     // Set the mouse click size offset state
//     setMouseClickSizeOffset({
//       width: event.clientX - size.width,
//       height: event.clientY - size.height
//     });
//     // Set the is dragging state
//     setIsDragging(true);
//     // Set the is resizing state
//     setIsResizing(true);
//     // Set the is resizing top state
//     setIsResizingTop(true);
//     // Set the is resizing right state
//     setIsResizingRight(true);
//     // Set the is resizing bottom state
//     setIsResizingBottom(true);
//     // Set the is resizing left state
//     setIsResizingLeft(true);
//   };

//   // Create a function that handles the mouse up event
//   const handleMouseUp = event => {
//     // Set the is dragging state
//     setIsDragging(false);
//     // Set the is resizing state
//     setIsResizing(false);
//     // Set the is resizing top state
//     setIsResizingTop(false);
//     // Set the is resizing right state
//     setIsResizingRight(false);
//     // Set the is resizing bottom state
//     setIsResizingBottom(false);
//     // Set the is resizing left state
//     setIsResizingLeft(false);
//   };

//   // Return the component
//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "lightgray",
//         position: "relative"
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: position.y,
//           left: position.x,
//           width: size.width,
//           height: size.height,
//           backgroundColor: "white",
//           border: "1px solid black",
//           cursor: isDragging ? "grabbing" : "grab"
//         }}
//         onMouseDown={handleMouseDown}
//       >
//         <div
//           style={{
//             position: "absolute",
//             top: -10,
//             left: -10,
//             width: 20,
//             height: 20,
//             backgroundColor: "white",
//             border: "1px solid black",
//             cursor: isResizingTop && isResizingLeft ? "nwse-resize" : "default"
//           }}
//           onMouseDown={handleMouseDown}
//         />
//         <div
//           style={{
//             position: "absolute",
//             top: -10,
//             right: -10,
//             width: 20,
//             height: 20,
//             backgroundColor: "white",
//             border: "1px solid black",
//             cursor: isResizingTop && isResizingRight ? "nesw-resize" : "default"
//           }}
//           onMouseDown={handleMouseDown}
//         />
//         <div
//           style={{
//             position: "absolute",
//             bottom: -10,
//             right: -10,
//             width: 20,
//             height: 20,
//             backgroundColor: "white",
//             border: "1px solid black",
//             cursor: isResizingBottom && isResizingRight ? "nwse-resize" : "default"
//           }}
//           onMouseDown={handleMouseDown}
//         />
//         <div
//           style={{
//             position: "absolute",
//             bottom: -10,
//             left: -10,
//             width: 20,
//             height: 20,
//             backgroundColor: "white",
//             border: "1px solid black",
//             cursor: isResizingBottom && isResizingLeft ? "nesw-resize" : "default"
//           }}
//           onMouseDown={handleMouseDown}
//         />
//       </div>
//     </div>
//   );
    // const [position, setPosition] = useState({ x: 0, y: 0 });
  
    // const handleMouseDown = (e) => {
    //   const startX = e.pageX - position.x;
    //   const startY = e.pageY - position.y;
  
    //   const handleMouseMove = (e) => {
    //     setPosition({
    //       x: e.pageX - startX,
    //       y: e.pageY - startY
    //     });
    //   };
  
    //   document.addEventListener('mousemove', handleMouseMove);
  
    //   document.addEventListener('mouseup', () => {
    //     document.removeEventListener('mousemove', handleMouseMove);
    //   });
    // };
  
    // return (
    //   <h1 className='subtitle'
    //     onMouseDown={handleMouseDown}
    //     style={{
    //       position: 'absolute',
    //       left: position.x,
    //       top: position.y
    //     }}
    //   >
    //     Drag Me
    //   </h1>
    // );
//   };
  
//   export default ErrorPage;
  



const ErrorPage = () =>
{
    const [footPos, setFootPos] = useState();

    useEffect(() =>
    {
        handleResize();
    }, []);

    useEffect(() =>
    {
        window.addEventListener("resize", handleResize, false);
    }, []);

    const handleResize = () =>
    {
        if (document.documentElement.scrollHeight <= window.innerHeight)
        {
            setFootPos('bottom-footer');
        }
        else
        {
            setFootPos('');
        }
    }

    return(
        <motion.div
            key='error'
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1}}}
            exit={{opacity:0, transition:{duration:1}}}>

            <h1 class='sub-title'>Error 404: Page Not Found</h1>
            <p class='info'>Sorry, the page you have requested is not available. If you believe this was an error on our part, please contact our web development team!</p>
            
            <div className='link-container'>
                <Link className='error-link' to='/'>
                    Go to Home
                </Link>

                <Link className='error-link' to='/displayproducts'>
                    View Other Products
                </Link>

                <Link className='error-link' to='/contact'>
                    Contact Us
                </Link>
            </div>

            <div className={footPos}>
                <Footer />
            </div>

        </motion.div>
    )
}

export default ErrorPage;
