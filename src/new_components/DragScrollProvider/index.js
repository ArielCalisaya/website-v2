import React, {useRef, useState, useMemo } from 'react';
import {Div} from '../Sections'

const DragScrollProvider = (props) => {
    const dragIt = useRef({current: {}})

    const [isGrabbing, setisGrabbing] = useState(false)
    const [clientX, setClientX] = useState(0)

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
      setClientX(e.clientX);
    }
  };

  const { className, display, height, background, padding, margin, justifyContent, id } = props;

  const styles = useMemo(() => ({
    cursor: isGrabbing ? '-webkit-grabbing' : '-webkit-grab'
  }), [isGrabbing]);

    return (
      <Div style={styles} className={className} display={display} height={height} background={background} padding={padding}
        id={id}
        margin={margin} justifyContent={justifyContent}
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

// className="testimonial-slider" display="flex" height="auto" background="linear-gradient(#f5f5f5, white)" padding="0 0 20px 0"