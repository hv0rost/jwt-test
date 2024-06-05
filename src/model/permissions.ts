export interface UserPermissions {
  pageOne?: PagePermissions
  pageTwo?: PagePermissions
  pageThree?: PagePermissions
}

interface PagePermissions {
  componentOne?: Permissions
  componentTwo?: Permissions
  componentThree?: Permissions
  componentFour?: Permissions
}
interface Permissions {
  read: boolean
  write?: boolean
}
