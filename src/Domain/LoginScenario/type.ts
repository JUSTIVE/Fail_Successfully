export type InsufficientPasswordRequirements = {
  _loginFailType: "InsufficientPasswordRequirements"
}

export type LoginInValid = {
  _loginFailType: "LoginInValid"
}

export type AlreadyLogined = {
  _loginFailType: "AlreadyLogined"
}

export type NotRegistered ={
  _loginFailType: "NotRegistered"
}

export type LoginFailType = 
	| InsufficientPasswordRequirements // 비밀번호 최소 요구조건 미충족
	| LoginInValid //로그인 검증 실패
	| AlreadyLogined // 이미 로그인 되어있음
	| NotRegistered // 등록되지 않은 사용자

export type LoginSuccessType = {
  _LoginAcitonType: "LoginSuccess"
}


export type LoginRequirement ={
  id:string,
  password:string
}