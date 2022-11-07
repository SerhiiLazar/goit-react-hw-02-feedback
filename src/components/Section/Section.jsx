import React from 'react';

const Section = ({children, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
};

export default Section;