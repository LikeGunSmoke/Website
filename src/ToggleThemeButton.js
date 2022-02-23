import styled from 'styled-components';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function ToggleThemeButton({ currentTheme, handleToggleTheme }) {
  return (
    <ToggleThemeButtonContainer>
      {currentTheme === 'light' &&
        <MdDarkMode onClick={handleToggleTheme} style={{height: "100%", width: "100%", color: "#050829"}} />
      }
      {currentTheme === 'dark' &&
        <MdOutlineLightMode onClick={handleToggleTheme} style={{height: "100%", width: "100%", color: "#84C3CC"}} />
      }
    </ToggleThemeButtonContainer>
  );
};

const ToggleThemeButtonContainer = styled.div`
height: 100%;
width: 100%;
&:hover {
  cursor: pointer;
}
`