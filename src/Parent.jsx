import React, { useState } from 'react'
import Heading from "./Heading";
import Compt from "./Compt";

const Parent = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <>
            <Heading setIsClicked={setIsClicked} isClicked={isClicked} />
            <Compt isClicked={isClicked} />
        </>
    )
}

export default Parent;
