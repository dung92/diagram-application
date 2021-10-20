import React, { useEffect } from "react";
import mf from "diagram-library";
import "./App.css";

function App() {
  useEffect(() => {
    const Shape = mf.Diagramming.Shape;
    const shapes = ["Actor", "RoundRect", "Triangle", "Decision"];
    const Diagram = mf.Diagramming.Diagram;
    const diagram =
      document.querySelectorAll("#diagram")[0] &&
      Diagram.create(document.querySelectorAll("#diagram")[0]);
    const nodeList =
      document.querySelectorAll("#nodeList")[0] &&
      mf.Diagramming.NodeListView.create(
        document.querySelectorAll("#nodeList")[0]
      );
    for (let i = 0; i < shapes.length; ++i) {
      let node = new mf.Diagramming.ShapeNode(diagram);
      node.setText(shapes[i]);
      node.setShape(Shape.fromId(shapes[i]));
      nodeList && nodeList.addNode(node, shapes[i]);
    }
  }, []);

  return (
    <div className="App">
      <div id="content" style={{ top: "60px", bottom: "24px" }}>
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            bottom: "0px",
            width: "200px",
            borderRight: "1px solid #e2e4e7",
            overflow: "hidden",
            verticalAlign: "top",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
              position: "absolute",
              top: "201px",
              left: "0px",
              right: "0px",
              bottom: "0px",
            }}
          >
            <canvas id="nodeList" style={{ width: "200px" }}></canvas>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: "201px",
          top: "0px",
          right: "0px",
          bottom: "0px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            right: "0px",
            bottom: "0px",
            overflow: "auto",
          }}
        >
          <canvas id="diagram" width="2100" height="2100">
            This page requires a browser that supports HTML 5 Canvas element.
          </canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
