import React from 'react'

function Album() {
  let a = [0,1,2,3,4,5,6,7];


  return (
    <div className='album-container'>


        {a.map(function(i){
            return(
            <div className='album' >
                <img src={`/Album/ex${a[i]}.jpg`} alt="" className='album-img' />
            </div>
            )
        }
        )}
    </div>
  )
}

export default Album