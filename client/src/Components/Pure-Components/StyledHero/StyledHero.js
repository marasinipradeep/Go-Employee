import styled from 'styled-components';
import deafaultImage from '../../images/employee.jpeg';


const StyledHero = styled.header`
min-height: 50vh;
background:url(${props => props.img ? props.img :
        deafaultImage}) center/
cover no-repeat;
display:flex;
align-items:center;
justify-content:center;
`;


export default StyledHero;