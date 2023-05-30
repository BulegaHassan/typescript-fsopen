import Part from "./Part";
import { ContentProps } from "../types";
const Content = ({ courseParts }: ContentProps) => {
  return (
    <div>
      <Part courseParts={courseParts} />
    </div>
  );
};
export default Content;
