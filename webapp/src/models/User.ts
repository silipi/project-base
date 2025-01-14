enum Provider {
  GITHUB = 'GITHUB',
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  provider: Provider;
  createdAt: string;
  updatedAt: string;
}
