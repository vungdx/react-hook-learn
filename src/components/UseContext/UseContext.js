import { useContext } from "react";
import Content from "./Content";
import { themeContext } from "./ThemeContext";

/* 
  Comp UseContext => Comp Content => Comp Paragraph
  1. Create context
  2. Provider
  3. Consumer
**/

function UseContext(props) {
  const context = useContext(themeContext);
  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Content />
    </div>
  );
}

UseContext.propTypes = {};

export default UseContext;
