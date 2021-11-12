export default interface dataInterface {
  id: number;
  company: string;
  logo: string;
  newP: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface stateInterface {
  data: dataInterface[];
  filterArray: string[];
}
