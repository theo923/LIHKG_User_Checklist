import React from 'react'

let num = 0;
let sortCount = 0;
let sortType = 0;

export const UserCard = ({id}) => {
    imgSort()

    return(
        <div className={`card shadow-xl image-full ${imgSpan(num)} `}>
            <figure >
                <img src={imgSrc[num]} alt={id[0]}></img>
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

const imgSpan = (num) => {
    if((num >= 8) && document.documentElement.clientWidth >= 1000) return "col-span-2 "
}

const imgSort = () => {
    if(sortCount === 0) {
        sortType = Math.floor(Math.random() * 3) + 1;
        (sortType === 2) ? sortCount = 3 : sortCount = 2;
    }
    
    switch(sortType) {
        case 1: (sortCount === 3) ? num = Math.floor(Math.random() * 8) : num = Math.floor(Math.random() * 4) + 8
                sortCount--
                console.log(`sortType ${sortType}, num ${num}, sortCount ${sortCount}`)
                break
        case 2: num = Math.floor(Math.random() * 8)
                sortCount--
                console.log(`sortType ${sortType}, num ${num}, sortCount ${sortCount}`)
                break
        case 3: (sortCount === 3) ? num = Math.floor(Math.random() * 4) + 8 : num = Math.floor(Math.random() * 8)
                sortCount--
                console.log(`sortType ${sortType}, num ${num}, sortCount ${sortCount}`)
                break
    }
}


const imgSrc = [
    'https://na.cx/i/xOgEcjs.gif',
    'https://na.cx/i/YW4JbSJ.gif',
    'https://na.cx/i/JeO89VK.gif',
    'https://na.cx/i/OPy1Kxy.gif',
    'https://na.cx/i/jdjXhPq.gif',
    'https://na.cx/i/9Dxh1ST.gif',
    'https://na.cx/i/YCgntoK.gif',
    'https://na.cx/i/GuegxQ4.gif',
    'https://na.cx/i/MFQf68K.gif',
    'https://na.cx/i/A53QCiA.gif',
    'https://na.cx/i/zJ00e5e.gif',
    'https://na.cx/i/Z9RVOZd.gif',
    'https://na.cx/i/VFXFfnA.gif'
]