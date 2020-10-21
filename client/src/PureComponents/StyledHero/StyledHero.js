import styled from 'styled-components';
import deafaultImage from '../../Images/employee.jpg';


const StyledHero = styled.header`
min-height: 100vh;
background:url(${props => props.img ? props.img :
        deafaultImage}) center/
cover no-repeat;
display:flex;
align-items:center;
justify-content:center;
`;


export default StyledHero;