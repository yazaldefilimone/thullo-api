export type userStore = {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: string;
};
export type userCreate = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
};

export type user = {
  name: string;
  email: string;
  password: string;
};
