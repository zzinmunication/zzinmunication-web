import styled from "styled-components";
import propsToStyle from "utils/propsToStyle";

interface Props {
  style?: any
}

export const ListHover: any = styled.div`
  .ant-list-header {
    border-bottom: 1px solid black;
  }
  ul.ant-list-items {
    & > li.ant-list-item:hover {
      background-color: rgba(0, 0, 0, 0.1);

      &:last-child {
        border-radius: 0px 0px 10px 10px;
      }
    }
  } 
  

  ${(props: Props) => propsToStyle(props.style || {})}
`