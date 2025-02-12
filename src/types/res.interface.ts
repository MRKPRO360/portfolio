export interface IError {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
}

export interface IMeta {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
}

export interface IResponse<T> {
  data?: T;
  error?: IError;
  meta?: IMeta;
  success: boolean;
  message: string;
}
