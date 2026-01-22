import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        presetColors={[
          "#ff8220",
          "#13A786",
          "#39F2AE",
          "#EDE7DC",
          "#5D6D93",
          "#00ADBB",
        ]}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
