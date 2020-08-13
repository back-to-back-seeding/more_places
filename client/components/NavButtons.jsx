import React from 'react';
import styled from 'styled-components';

const RightButton = styled.button`
  background-color: white;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  height: 35px;
  margin: 0px;
  outline: none;
  width: 35px;
`;
// TODO figure out why transitions aren't working...
const RightButtonHover = styled.button`
  background-color: blue;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  height: 35px;
  margin: 0px;
  outline: none;
  width: 35px;
  transition: box-shadow 0.2s ease 0s;
`;

const LeftButton = styled.button`
  background-color: white;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  height: 35px;
  margin-right: 12px;
  outline: none;
  width: 35px;
`;
// TODO figure out why transitions aren't rendering
const LeftButtonHover = styled.button`
  background-color: blue;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  height: 35px;
  margin-right: 12px;
  outline: none;
  width: 35px;
  transition: box-shadow 0.2s ease 0s;
`;

const PageCount = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-right: 16px;
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: rgb(247, 247, 247);
  display: flex;
`;

// TODO => Come up with way to compute total number of pages based on number of listing in db
// this will have to do with the number of listings we get in the response...
class NavButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 4,
      leftMouseHover: false,
      rightMouseHover: false,
    };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleLeftMouseHover = this.handleLeftMouseHover.bind(this);
    this.handleLeftMouseLeave = this.handleLeftMouseLeave.bind(this);
    this.handleRightMouseHover = this.handleRightMouseHover.bind(this);
    this.handleRightMouseLeave = this.handleRightMouseLeave.bind(this);
  }

  handleRightClick() {
    let curCount = this.state.currentPage;
    if (curCount === this.state.totalPages) {
      this.setState({ currentPage: 1 });
    } else {
      curCount += 1;
      this.setState({ currentPage: curCount });
    }
  }

  handleLeftClick() {
    let curCount = this.state.currentPage;
    if (curCount !== 1) {
      curCount -= 1;
      this.setState({ currentPage: curCount });
    }
  }

  handleLeftMouseHover() {
    this.setState({ leftMouseHover: true });
  }

  handleLeftMouseLeave() {
    this.setState({ leftMouseHover: false });
  }

  handleRightMouseHover() {
    this.setState({ rightMouseHover: true });
  }

  handleRightMouseLeave(e) {
    this.setState({ rightMouseHover: false });
  }

  render() {
    if (this.state.leftMouseHover) {
      return (
        <Wrapper>
          <PageCount>
            {this.state.currentPage}
            {' '}
            /
            {' '}
            {this.state.totalPages}
          </PageCount>
          <LeftButtonHover onClick={this.handleLeftClick} onMouseLeave={this.handleLeftMouseLeave}>
            <svg viewBox="0 0 18 18" role="presentation" style={{ height: 10, width: 10 }}>
              <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
            </svg>
          </LeftButtonHover>
          <RightButton onClick={this.handleRightClick}>
            <svg viewBox="0 0 18 18" style={{ height: 10, width: 10 }}>
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
            </svg>
          </RightButton>
        </Wrapper>
      );
    } if (this.state.rightMouseHover) {
      return (
        <Wrapper>
          <PageCount>
            {this.state.currentPage}
            {' '}
            /
            {' '}
            {this.state.totalPages}
          </PageCount>
          <LeftButton onClick={this.handleLeftClick}>
            <svg viewBox="0 0 18 18" role="presentation" style={{ height: 10, width: 10 }}>
              <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
            </svg>
          </LeftButton>
          <RightButtonHover onClick={this.handleRightClick} onMouseLeave={this.handleRightMouseLeave}>
            <svg viewBox="0 0 18 18" style={{ height: 10, width: 10 }}>
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
            </svg>
          </RightButtonHover>
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <PageCount>
          {this.state.currentPage}
          {' '}
          /
          {' '}
          {this.state.totalPages}
        </PageCount>
        <LeftButton onClick={this.handleLeftClick} onMouseEnter={this.handleLeftMouseHover}>
          <svg viewBox="0 0 18 18" role="presentation" style={{ height: 10, width: 10 }}>
            <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
          </svg>
        </LeftButton>
        <RightButton onClick={this.handleRightClick} onMouseEnter={this.handleRightMouseHover}>
          <svg viewBox="0 0 18 18" style={{ height: 10, width: 10 }}>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
          </svg>
        </RightButton>
      </Wrapper>
    );
  }
}

export default NavButtons;
