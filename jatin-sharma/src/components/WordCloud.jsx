import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import '../assets/styles/wordcloud.css';

function WordCloudSection() {
  const svgRef = useRef(null);
  const words = [
    // Replace with your own words here
    "Amazing",
    "Eye-catching",
    "React",
    "Website",
    "Data",
    "Visualization",
    "Cloud",
    "Beautiful",
    "Unique",
    "Engaging",
  ];
  const [currentWords, setCurrentWords] = useState(words.slice(0, 3)); // Initial set of words
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const layout = cloud()
      .size([500, 500])
      .words(currentWords)
      .padding(5)
      .rotate(function () { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function (d) { return d.size; });

    const draw = (words) => {
      const svg = d3.select(svgRef.current);
      const cloudSelection = svg.selectAll("text")
        .data(words);

      cloudSelection.enter().append("text")
        .style("font-family", "Impact")
        .style("fill", (d, i) => d3.schemeCategory10[i % 10])
        .attr("text-anchor", "middle")
        .attr("transform", d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .style("font-size", "1e-6")
        .text(d => d.text);

      cloudSelection.transition()
        .duration(600)
        .styleTween("font-size", function (d) {
          const i = d3.interpolateNumber(this.fontSize.baseVal.value, d.size);
          return function (t) { return i(t) + "px"; };
        });

      cloudSelection.exit()
        .transition()
        .duration(200)
        .style("font-size", "1e-6")
        .remove();

      layout.on("end", draw);
      layout.start();
    };

    draw(currentWords);

    // Change words every 5 seconds
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 3) % words.length;
      setCurrentWords(words.slice(newIndex, newIndex + 3));
      setCurrentIndex(newIndex);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="wordcloud-container">
      <svg ref={svgRef} width={500} height={500}></svg>
    </div>
  );
}

export default WordCloudSection;
