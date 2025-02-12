export interface BlogFormInput {
  title: string;
  content: string;
  blogImageData: FileList;
  tag: string;
  isDeleted?: boolean;
  author: string;
}
