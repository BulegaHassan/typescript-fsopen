interface CoursePartBase {
  name: string;
  exerciseCount: number;
}
interface CoursePartDesc extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartDesc {
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground extends CoursePartDesc {
  backgroundMaterial: string;
  kind: "background";
}
interface CoursePartSpecial extends CoursePartDesc {
  requirements: string[];
  kind: "special";
}
export interface HeaderProps {
  courseName: string;
}
export interface ContentProps {
  courseParts: CoursePart[];
}
export interface TotalProps {
  courseParts: CoursePart[];
}
export interface PartProps {
  courseParts: CoursePart[];
}
export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartSpecial;
