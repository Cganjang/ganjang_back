export const StaffStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  DELETED: 'deleted',
  BLOCKED: 'blocked',
} as const;

export type StaffStatusType = (typeof StaffStatus)[keyof typeof StaffStatus];

export const StaffRole = {
  OWNER: 1, // 대표
  DIRECTOR: 2, // 원장
  ARTIST: 3, // 아티스트
  SHOP_ACCOUNT: 4, // 샵 공용 계정
} as const;

export type StaffRoleType = (typeof StaffRole)[keyof typeof StaffRole];
