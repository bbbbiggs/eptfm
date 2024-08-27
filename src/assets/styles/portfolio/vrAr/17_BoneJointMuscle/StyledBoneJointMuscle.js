import styled from 'styled-components';

export const StyledBoneJointMuscle = styled.div`
  @media (min-width: 1025px) {
    .fff6df {
      background-color: #fff6df;
      margin-bottom: 160px;
    }
    .heroWrapper {
      position: relative;
      max-width: 1920px;
      width: 100%;
      margin-bottom: 100px;
      margin-top: 80px;
      text-align: right;

      img {
        max-width: 1150px;
        width: 60%;
      }

      .rectangle {
        position: absolute;
        aspect-ratio: 950 / 680;
        background-color: rgba(234, 181, 102, 0.9);
        top: 158px;
        width: clamp(500px, 49vw, 950px);
        /* height: 680px; */
        /* height: clamp(300px, 62vh, 680px); */

        .introductionWrapper {
          text-align: left;
          /* margin-top: 187px; */
          margin-top: clamp(50px, 5vw, 187px);
          margin-left: clamp(100px, 13vw, 330px);
          /* position: absolute; */
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .heroWrapper {
      display: grid;
    }
    .rectangle {
      order: 2;
      position: relative;
      background-color: rgba(234, 181, 102, 0.9);
      width: clamp(345px, 92vw, 1000px);
      aspect-ratio: 345 / 270;
      /* transform: translateY(-48px); */
      margin-top: -48px;
      .introductionWrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .fff6df {
      background-color: #fff6df;
      margin-bottom: 80px;
    }
  }
`;
