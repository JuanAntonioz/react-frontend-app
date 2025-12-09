export interface User {
  login: { uuid: string };
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    thumbnail: string;
    large: string;
  };
}

export interface UserResponse {
  results: User[];
}
