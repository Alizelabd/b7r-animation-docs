"use client";

import { Highlight, themes } from "prism-react-renderer";

export function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <Highlight theme={themes.nightOwl} code={code} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={{ ...style, padding: "20px", borderRadius: "8px", overflow: "auto" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="select-none mr-4 text-gray-500">{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}