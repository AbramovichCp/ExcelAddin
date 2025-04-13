import { MODE } from "./constants";
export type ModeType = (typeof MODE)[keyof typeof MODE];
