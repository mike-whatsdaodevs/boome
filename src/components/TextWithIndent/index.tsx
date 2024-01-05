import React, { useState, useEffect, useRef } from 'react';

interface TextWithReverseIndentProps {
  text: string;
}

const TextWithReverseIndent: React.FC<TextWithReverseIndentProps> = ({ text }) => {
  const textContainer = useRef<HTMLDivElement>(null);
  const [indentedLines, setIndentedLines] = useState<string[]>([]);

  useEffect(() => {
    const calculateIndents = () => {
      if (!textContainer.current) return;
      const container = textContainer.current;
      const words = text.split(' ');
      let line = '';
      let lines: string[] = [];
      let currentLine = '';
      let lineCount = 0;

      words.forEach(word => {
        const testLine = line + word + ' ';
        const indentEmSize = getEmSize(container);
        const maxLineWidth = container.clientWidth - (indentEmSize * lineCount);
        const lineWidth = getTextWidth(testLine, getComputedStyle(container).font);

        if (lineWidth > maxLineWidth && line.length > 0) {
          lines.push(currentLine.trim());
          line = word + ' ';
          currentLine = word + ' ';
          lineCount++;
        } else {
          line = testLine;
          currentLine += word + ' ';
        }
      });

      lines.push(currentLine.trim()); // Add last line
      setIndentedLines(lines);
    };

    const getTextWidth = (text: string, font: string) => {
      let canvas = document.createElement("canvas");
      let context = canvas.getContext("2d")!;
      context.font = font;
      return context.measureText(text).width;
    };

    const getEmSize = (element: HTMLElement) => {
      return parseFloat(getComputedStyle(element).fontSize);
    };

    calculateIndents();
    window.addEventListener('resize', calculateIndents);

    return () => {
      window.removeEventListener('resize', calculateIndents);
    };
  }, [text]);

  return (
    <div ref={textContainer} style={{ whiteSpace: 'pre-wrap', background: 'yellow' }}>
      {indentedLines.map((line, index, arr) => (
        <div key={index} style={{ textIndent: `${(arr.length - index) * 0.25}em`, marginLeft: '1em' }}>
          {line}
        </div>
      ))}
    </div>
  );
};

export default TextWithReverseIndent;
