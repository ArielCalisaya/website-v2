import React, {useEffect, useState, useContext} from 'react';
import PropTypes from "prop-types";
import {Button, Colors} from '../Styling';
import {Card} from '../Card'
import {Break} from '../Responsive'
import {Row, Column} from '../Sections'
import { navigate } from "@reach/router"
import styled from 'styled-components';

export const ChooseWrap = styled.div`
    position: relative;
    cursor: pointer;
    margin: ${props => props.margin};
    @media ${Break.sm} {
        width: 100%;
        margin: ${props => props.m_sm};
    }
    @media ${Break.xs} {
        width: 100%;
        margin: ${props => props.m_xs};
    }
`;
export const Schedule = styled.small`
    font-size: 12px;
    display: block;
    color: #BDBDBD;
`;
const ChooseProgram = (props) => {
    const [status, setStatus] = useState({ toggle: false, hovered: false })
    const _Selector = (_p) => <Button 
        shadow="0px 0px 6px 2px rgba(0, 0, 0, 0.2)" 
        padding="10px 30px" 
        maxWidth="250px"
        onClick={() => _p.setStatus({ toggle: !_p.status.toggle })} 
        color={Colors.blue} 
        textColor={Colors.white}
    >
        {_p.status.toggle ? props.openLabel : props.closeLabel}
    </Button>
    const Selector = props.selector || _Selector;
    return (
        <ChooseWrap 
            centered={props.centered}
            margin={props.margin}
            m_sm={props.m_sm}
            m_xs={props.m_xs}
            onMouseLeave={() => {
                setStatus({ ...status, hovered: false });
                setTimeout(() => {
                    setStatus(_status => ({ ..._status, toggle: _status.hovered }));
                },300)
            }}
            onMouseEnter={() => setStatus({ ...status, hovered: true })}
        >
            <Selector status={status} setStatus={setStatus} />
            {status.toggle && 
                <Row 
                    margin={props.margin}
                    m_sm={props.m_sm}
                    m_xs={props.m_xs}
                    width="250px" 
                    width_xs="100%" 
                    width_sm="100%"
                    align="center" 
                    position="absolute" 
                    right={props.right}
                    top={props.top}
                    left={props.left}
                    zIndex="2" 
                    background={Colors.white} 
                    borderRadius={props.borderRadius} 
                    shadow={props.shadow}
                >
                    {Array.isArray(props.programs) && props.programs.map((item, index) => {
                        return (
                            <Button 
                                key={index}
                                colorHover={Colors.lightBlue}
                                onClick={() => navigate(item.link)} 
                                textColor={Colors.gray} 
                                fontSize={"16px"}
                                borderRadius=".75rem" padding="10px"
                            >
                                {item.text}
                                { item.schedule && item.schedule != "" && <Schedule>{item.schedule}</Schedule>}
                            </Button>
                        )
                    })}
                </Row>
            }
        </ChooseWrap>
    )
};
ChooseProgram.propTypes = {
    selector: PropTypes.func,
    marginTop: PropTypes.string,
    marginLeft: PropTypes.string,
    borderRadius: PropTypes.string,
    shadow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
      ])
  };
  ChooseProgram.defaultProps = {
    selector: null,
    shadow: true,
    marginTop: "5px",
    marginLeft: "0",
    borderRadius: ".75rem",
  }
export default ChooseProgram;