import { File360TourDefaultModel } from "./file360TourDefaultModel";
import { File360TourScenesModel } from "./file360TourScenesModel";

export class File360TourModel {
  defaultValue: File360TourDefaultModel;
  scenes: Map<string, File360TourScenesModel>;
}
