export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(userCredentials) {
  if (
    userCredentials.userName === 'test' &&
    userCredentials.password === 'password'
  ) {
    return {
      type: LOGIN_SUCCESS
    };
  }
  return {
    type: LOGIN_ERROR
  };
}
