export interface login {
  data: loginData | loginError
}

export interface loginData {
  token: string,
  user: loginDataUser,
  flag: any,
  message: any,
}

export interface loginDataUser {
  id: string,
  login: string
}

export interface UserData {
  login: string,
  password: string
}

export interface loginError {
  flag: boolean,
  message: string
}