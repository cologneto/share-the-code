import { Role } from "./role";

export interface User {
  id?: string,
  username: string,
  email: string,
  password: string,
  roles: Role[]
}