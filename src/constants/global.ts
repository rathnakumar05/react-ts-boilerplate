export type GlobalType = {
  base_url: string;
  login_url: string;
};

export const Global: GlobalType = {
  base_url: 'https://api.ipify.org',
  login_url: '/login',
};
