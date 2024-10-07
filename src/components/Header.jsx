import { useEffect, useRef, useState } from "react"

export function Header() {
    const [toggle, setToggle] = useState(false);
    const toggleRef = useRef(null);



    let toggleMove = () => {
      setToggle(!toggle);
    
    }

    useEffect(() => {
      if (toggle) {
        toggleRef.current.style.transform = "translateX(53px)"; // 오른쪽으로 100px 이동
      } else {
        toggleRef.current.style.transform = "translateX(0px)"; // 원래 위치로 돌아옴
      }
    }, [toggle]); // isToggled 상태가 변할 때마다 실행


    return(
        <header>
        <div>
          <h1>Stud</h1>
        </div>
        <div className='toggle' onClick={()=>{toggleMove()}}>
          <div className='toggle_back'>
            <div className='toggle_btn' ref={toggleRef}>
            {toggle ? "Other" : "Me"}
            </div>
          </div>
        </div>
        <div className='profile'></div>
      </header>
    )


}