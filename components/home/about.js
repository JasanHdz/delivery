import React from 'react'
import styled from 'styled-components'
import Wrapper from '../common/wrapper'

const Background = styled.section`
  height: 642px;
  background-color: var(--secondary);
  display: flex; 
  align-items: center;
`
const AboutStyled = styled.div`
  display: flex;
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
  }
`

function About() {
  return (
    <Background id="nosotros">
      <Wrapper>
        <AboutStyled>
          <div className="about">
            <h2 className="subtitle">nosotros</h2>
            <p className="about-us">
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
            <br />
            <br />
            lorem ipsu lorem ipsu  lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsulorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu .
            </p>
          </div>
          <img src="/delivery.jpg" alt="entrega de paquete" width="400" height="500" />
        </AboutStyled>
      </Wrapper>
    </Background>
  )
}

export default About