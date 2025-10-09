export const UserStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  DELETED: 'deleted',
  BLOCKED: 'blocked',
} as const;

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

export const UserRole = {
  SUPER_ADMIN: 'super_admin',
  CEO: 'ceo',
  DIRECTOR: 'director',
  EMPLOYEE: 'exployee',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
