import React from 'react'
import styled from 'styled-components'
import Wrapper from '../common/wrapper'
import Background from 'common/background';

// const Background = styled.section`
//   height: 642px;
//   background-color: var(--secondary);
//   display: flex; 
//   align-items: center;
// `
const AboutStyled = styled.div`
  padding: 10px 0;
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  .subtitle {
    font-size: 48px;
    color: white;
    text-transform: uppercase;
    margin-bottom: 32px;
  }
  .about {
    height: 500px;
    margin-right: 50px;
    p {
      max-width: 700px;
    }
  } */
  .subtitle {
    text-transform: uppercase;
    color: white;
  }
  .about p {
    margin: 10px 0 20px 0;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
  }
`

function About() {
  return (
    <Background id="nosotros" height="auto" color="var(--secondary)">
      <Wrapper>
        <AboutStyled>
          <div className="about">
            <h2 className="subtitle">nosotros</h2>
            <p>
            lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu 
            lorem ipsu lorem ipsu  lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsulorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu 
            lorem ipsu lorem ipsu  lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsulorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu .
            <br />
            <br />
            <br />

            lorem ipsu lorem ipsu  lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsulorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu 
            lorem ipsu lorem ipsu  lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsulorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu 
            lorem ipsu lorem ipsu  lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsulorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu 
            lorem ipsu lorem ipsu  lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem 
            </p>
          </div>
          <img src="/delivery.jpg" alt="entrega de paquete" />
        </AboutStyled>
      </Wrapper>
    </Background>
  )
}

export default About