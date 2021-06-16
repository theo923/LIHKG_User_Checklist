import React from 'react'

export const UserCard = ({id, num}) => {
    if(num[0] > 11) num[0] = 0
    else num[0]++

    return(
        <div className={`card shadow-xl image-full ${imageSort(num[0])} `}>
            <figure >
                <img src={imgSrc[num[0]]} alt={id[0]}></img>
            </figure> 
            <div className="justify-end card-body">
                <h2 className="card-title">{id[0]}</h2> 
                <p>{id[1][0].reason}</p> 
                <div className="card-actions">
                <button className="btn btn-primary" onClick={() => window.open(id[1][0].url, '_blank')}>Link</button>
                </div>
            </div>
        </div> 
        
    )
}

const imageSort = (num) => {
    if((num === 3 || num === 4 || num === 0 || num === 7 || num === 12) && document.documentElement.clientWidth >= 1000) return "col-span-2"
}


const imgSrc = [
    'https://na.cx/i/Z9RVOZd.gif',
    'https://na.cx/i/xOgEcjs.gif',
    'https://na.cx/i/YW4JbSJ.gif',
    'https://na.cx/i/MFQf68K.gif',
    'https://na.cx/i/A53QCiA.gif',
    'https://na.cx/i/JeO89VK.gif',
    'https://na.cx/i/OPy1Kxy.gif',
    'https://na.cx/i/zJ00e5e.gif',
    'https://na.cx/i/jdjXhPq.gif',
    'https://na.cx/i/9Dxh1ST.gif',
    'https://na.cx/i/YCgntoK.gif',
    'https://na.cx/i/GuegxQ4.gif',
    'https://na.cx/i/VFXFfnA.gif'
]