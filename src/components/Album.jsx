import React, { useRef } from 'react';

export function Album () {
  const scrollRef = useRef(null);

  // 마우스 휠로 가로 스크롤
  const handleWheel = (e) => {
      e.preventDefault(); // 기본 세로 스크롤 방지
      scrollRef.current.scrollLeft += e.deltaY; // deltaY로 가로 스크롤
  };

  // 마우스 드래그로 가로 스크롤
  const handleMouseDown = (e) => {
      e.preventDefault(); // 기본 드래그 방지
      const startX = e.pageX - scrollRef.current.offsetLeft;
      const scrollLeft = scrollRef.current.scrollLeft;

      const handleMouseMove = (e) => {
          const x = e.pageX - scrollRef.current.offsetLeft;
          const walk = (x - startX) * 2; // 스크롤 속도 조정
          scrollRef.current.scrollLeft = scrollLeft - walk;
      };

      const handleMouseUp = () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
  };
    return (
        <div className='album' ref={scrollRef} onMouseDown={handleMouseDown} onWheel={handleWheel}>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
          <div className='album1'></div>
        </div>
    )
}