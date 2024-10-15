import React, { useState, useRef, useEffect } from 'react';
import { useHorizontalScroll } from "../api/useSideScroll";

function Album() {
  let a = [0,1,2,3,4,5,6,7];
  const scrollRef = useHorizontalScroll();

  // 각 앨범에 대한 hover 상태를 배열로 관리
  const [hoveringIndex, setHoveringIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveringIndex(index);
  }

  const handleMouseOut = () => {
    setHoveringIndex(null);
  }

  return (
    <div className='album-container' ref={scrollRef} style={{ overflow: "auto" }}>
      {a.map((i) => (
        <div key={i}>
          <div className={`album ${i}`}>
            <img
              src={`/Album/ex${i}.jpg`}
              alt=""
              className='album-img'
              onMouseOver={() => handleMouseOver(i)}
              onMouseOut={handleMouseOut}
            />
            {hoveringIndex === i ? (
            <div className='mouseover_album'>
              {/* 여기에 마우스 오버 시 보여줄 내용을 추가 */}
              <p>Album {i} details</p>
            </div>
          ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Album;
