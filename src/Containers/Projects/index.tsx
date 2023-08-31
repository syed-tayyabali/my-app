import { forwardRef } from "react";
import { DividerWithName } from "../../Components/DividerWithName";

export const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      <DividerWithName name={"Projects"} />
    </section>
  );
});
