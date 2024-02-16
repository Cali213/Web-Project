import React, {useState} from 'react';
/* function for dropdown */
function Dropdown() {
/* tracker for whether or not the cursor is on the dropdown */
    let [hover, setHover] = useState(false)

    return (
    <>
    {/* container for dropdown */}
    <div className='dropContainer'>
        {/* when the cursor is hovered over the dropdown, setHover is set to false so when it leaves, setHover is set to true and the dropdown opens */}
        <p className='dropdown' onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)}>Dropdown</p>    
        {/* conditional rendering to ensure content only gets displayed if hover is true */}
        {hover && ( <div className= "dropDiv">
            <ul className="ulLi">
                <li href="#">Content 1</li>
                <li href="#">Content 2</li>
                <li href="#">Content 3</li>
            </ul>
            </div>
            )}  
            </div>
            </>
            )
        }

export default Dropdown