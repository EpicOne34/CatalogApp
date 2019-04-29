export interface User{
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  active: boolean;
  lockout: boolean;
  validEmail: boolean;
  userType: string;
  createDate?: string;
}