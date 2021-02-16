import React from 'react'
import styled from 'styled-components'
import Wrapper from '../common/wrapper'
import Background from 'common/background';

const AboutStyled = styled.div`
  padding: 10px 0;
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
    max-width: 401px;
    max-height: 501px;
    display: block;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    img {
      object-fit: cover;
    }
    .about {
      margin-right: 10px;
      p {
        max-width: 700px;
      }
    }
    .subtitle {
      font-size: 48px;
    }
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