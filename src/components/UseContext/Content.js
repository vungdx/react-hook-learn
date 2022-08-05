import React from "react";
import Paragraph from "./Paragraph";

function Content({ theme }) {
  return (
    <div>
      <Paragraph theme={theme} />
    </div>
  );
}

Content.propTypes = {};

export default Content;
