import styled from 'styled-components';
import deafaultImage from '../images/employee.jpg';


const StyledHero = styled.header`
min-height: 60vh;
background:url(${props => props.img ? props.img :
        deafaultImage}) center/
cover no-repeat;
display:flex;
align-items:center;
justify-content:center;
`;


export default StyledHero;