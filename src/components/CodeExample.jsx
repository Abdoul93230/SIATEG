import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeExample({ code, language }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter 
        language={language} 
        style={atomDark}
        showLineNumbers={true}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeExample;