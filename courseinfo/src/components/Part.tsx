import { PartProps } from "../types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ courseParts }: PartProps) => {
  return (
    <div>
      {courseParts.map((part, index) => {
        switch (part.kind) {
          case "basic":
            return (
              <div key={index}>
                <h3>
                  {part.name} {part.exerciseCount}
                </h3>
                <p>{part.description}</p>
              </div>
            );
          case "group":
            return (
              <div key={index}>
                <h3>
                  {part.name} {part.exerciseCount}
                </h3>
                <p>Project exercises {part.groupProjectCount}</p>
              </div>
            );
          case "background":
            return (
              <div key={index}>
                <h3>
                  {part.name} {part.exerciseCount}
                </h3>
                <p>{part.description}</p>
                <p>{part.backgroundMaterial}</p>
              </div>
            );
          case "special":
            return (
              <div key={index}>
                <h3>
                  {part.name} {part.exerciseCount}
                </h3>
                <p>{part.description}</p>
                <p>{part.requirements.join(",")}</p>
              </div>
            );
          default:
            return assertNever(part);
        }
      })}
    </div>
  );
};
export default Part;
