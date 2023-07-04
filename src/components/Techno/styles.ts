import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }

  .technos {
    margin-left : 125px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
    padding: 1rem;
    overflow: hidden;

    .techno {
      padding: 1rem 1.8rem;
      border-radius: 1.2rem;
      transition: 0.2s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;

      img {        
        width: 50%;
        height: auto;
      }

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }
    }
  }

  @media (max-width: 960px) {
    .technos {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .technos {
      grid-template-columns: 1fr;

      .techno {
        padding: 1.5rem;
      }
    }
  }
  
  @media (max-width: 480px) {
    .techno {
      margin-left : -25px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;
