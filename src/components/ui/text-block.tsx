import React from "react";

interface TextBlockProps {
  children: React.ReactNode;
}

export const TextBlock: React.FC<TextBlockProps> = ({ children }) => (
  <pre className="bg-gray-200 text-black p-4 rounded whitespace-pre-wrap mb-4">
    {children}
  </pre>
);

export default TextBlock;
