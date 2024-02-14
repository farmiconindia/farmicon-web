import React, { useEffect } from 'react'
import "./checkDisease.scss";

const CheckDisease = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <><div className='dis-container'>
            <div className='frame'>
                <iframe className='noscroll' src="http://54.85.172.109:8000/" width="100%" height="1000px"></iframe>
            </div>
        </div>
        </>
    )
}

export default CheckDisease