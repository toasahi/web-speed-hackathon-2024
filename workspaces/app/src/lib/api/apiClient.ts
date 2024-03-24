import ky from 'ky';

const createKyInstance = () => {
  const instance = ky.create({
    credentials: 'include',
    prefixUrl: process.env['API_URL'] || '/',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: false,
  });

  return instance;
};

export const apiClient = createKyInstance();
