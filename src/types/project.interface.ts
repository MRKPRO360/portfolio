export interface ProjectFormInputs {
  name: string;
  details: string;
  liveLink: string;
  githubLink: string;
  technologies: string;
  coverImage: FileList;
  projectImages: FileList;
  type: 'frontend' | 'fullstack';
}

export interface IProject {
  _id: string;
  name: string;
  type: 'frontend' | 'fullstack';
  details: string;
  liveLink: string;
  githubLink: string;
  coverImage: string;
  projectImages: string[];
  technologies: string[];
  authorEmail: string;
  isDeleted?: boolean;
}
