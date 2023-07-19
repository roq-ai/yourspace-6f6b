interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Space Owner'],
  customerRoles: [],
  tenantRoles: ['Space Owner'],
  tenantName: 'Organization',
  applicationName: 'yourspace',
  addOns: [],
};
