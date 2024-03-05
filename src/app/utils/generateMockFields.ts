import { IFormField } from "../types";

export const generateMockFields = (): IFormField[] => {
  return Array.from({ length: 250 }, (_, index) => ({
    id: `field-${index}`,
    label: `Field ${index + 1}`,
    type: "text",
  }));
};
