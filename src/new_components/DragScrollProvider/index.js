import React, {useRef, useState, useMemo } from 'react';
import {Div} from '../Sections'

const DragScrollProvider = (props) => {
    const dragIt = useRef({current: {}})

    const [isGrabbing, setisGrabbing] = useState(false)
    const [clientX, setClientX] = useState(0)
    const [scrollX, setScrollX] = useState(0)

  const onMouseDown = e => {
      setisGrabbing(true)
      setClientX(e.clientX)
  };

  const onMouseUp = () => {
      setisGrabbing(false)
  };

  const onMouseMove = e => {
    if (isGrabbing) {
      dragIt.current.scrollLeft = dragIt.current.scrollLeft - e.clientX + clientX;
      setScrollX(dragIt.current.scrollLeft - e.clientX + clientX)
      setClientX(e.clientX);
    }
  };

  const styles = useMemo(() => ({
    cursor: isGrabbing ? '-webkit-grabbing' : '-webkit-grab'
  }), [isGrabbing]);

    return (
      <Div style={styles} className="badge-slider" justifyContent="between" margin="0 0 60px 0"
        ref={dragIt}
        onMouseDown={(e) => onMouseDown(e)}
        onMouseUp={() => onMouseUp()}
        onMouseMove={(e) => onMouseMove(e)}
      >
        {props.children}
      </Div>
    );
  }


export default DragScrollProvider;