import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: white;
  top: 3%;
  left: 1%;
  width: 25%;
  height: 92%;
  border-radius: 5px;
  opacity: 0.85;

  ul {
    list-style: none;
    li {
      .user-container {
        padding: 15px;
        display: flex;
        flex: 1;
        align-items: center;
        border-bottom: 1px solid #e6ecf0;
        justify-content: space-around;

        img {
          margin-right: 15px;
          border-radius: 100px;
          width: 48px;
          height: 48px;
        }

        .user-info {
          margin-right: 15px;

          p {
            color: #8c8585;
            font-size: 14px;
          }
        }

        button {
          font-size: 10px;
          color: #fff;
          border-radius: 3px;
          border: none;
          padding: 4px;
          cursor: pointer;
          background: #fd7575;

          &:hover {
            background: #f55555;
          }
        }
      }
    }
  }
`;
