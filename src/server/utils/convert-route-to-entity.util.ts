const mapping: Record<string, string> = {
  bookings: 'booking',
  organizations: 'organization',
  spaces: 'space',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
