import React from 'react'

const Tooltip = () => {
    return (
        <>

            <div className='MyTool'>
                <h2> Tooltip</h2>
                <p>Move the mouse over the text below:</p>
                <div className='tool'>Hover over me
                    <span className="tooltext">Thnx for hovering I'm Tooltip </span>
                </div>
            </div>


        </>
    )
}

export default Tooltip
