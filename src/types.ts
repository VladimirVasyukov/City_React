export interface City {
  id: number;
  image: string;
  name: string;
  description: string;
  favorite: boolean;
}

export type View = "list" | "grid" | "edit";

export type CityForm = Omit<City, "id" | "favorite">;

export interface FormElements extends HTMLFormControlsCollection {
  image: HTMLInputElement;
  name: HTMLInputElement;
  description: HTMLInputElement;
}

export interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
