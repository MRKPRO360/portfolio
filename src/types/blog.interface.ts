export interface BlogFormInput {
  title: string;
  content: string;
  blogImageData: FileList;
  tag: string;
  isDeleted?: boolean;
  author: string;
}

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  blogImage: string;
  tag: string;
  isDeleted?: boolean;
  author: string;
  authorEmail: string;
  createdAt: string;
}
