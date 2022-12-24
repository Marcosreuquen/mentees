const BASE_URL = "/api";

//const BASE_URL = "http://localhost:3000/api";

export async function fetchAPI(input: RequestInfo, options: any) {
  const url = BASE_URL + input;

  const token = getSavedToken();
  console.log(token, "user token");

  options = options || {};
  const newOptions: any = options || {};
  newOptions.headers = newOptions.headers || {};
  newOptions.headers["Content-Type"] = "application/json";

  if (token) {
    newOptions.headers.Authorization = "Bearer " + token;
  }

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);

  if (res.status >= 200 && res.status < 300) {
    if (await res.json) {
      return await res.json();
    }
  } else {
    throw {
      message: "Hay un error con el fetch",
      status: res.status,
      res: res,
    };
  }
}

interface MentorData {
  name: string;
  category: string;
  community: string;
  description: string;
  email: string;
  image: string;
}

export async function createMentor(data: MentorData) {
  return fetchAPI("/mentor", {
    method: "POST",
    body: { ...data },
  });
}

//envia al email el codigo para ingresar
export async function sendCode(email: string) {
  return fetchAPI("/auth", {
    method: "POST",
    body: { email },
  });
}

// envia la direccion de email y el codigo para obtener el token
export async function getToken(email: string, code: string) {
  const data = await fetchAPI("/auth/token", {
    method: "POST",
    body: { code: parseInt(code), email },
  });

  saveToken(data);
  return true;
}

//guarda el token de usuario en localStorage
export function saveToken(token: string) {
  localStorage.setItem("auth-token", token);
}

//busca el token del usuario en localStorage
export function getSavedToken() {
  const token = localStorage.getItem("auth-token");
  return token;
}
