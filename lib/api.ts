const BASE_URL = "https://mentees-five.vercel.app/api";
// const BASE_URL = "http://localhost:3000/api";

export async function fetchAPI(input: RequestInfo, options: any) {
  const url = BASE_URL + input;

  options = options || {};
  const newOptions: any = options || {};
  newOptions.headers = newOptions.headers || {};
  newOptions.headers["Content-Type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);

  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw {
      message: "Hay un error con el fetch",
      status: res.status,
      res: res,
    };
  }
}

interface Mentor {
  name: string;
  category: string;
  community: string;
  description: string;
  email: string;
  image: string;
}

export async function createMentor(data: Mentor) {
  return fetchAPI("/mentor", {
    method: "POST",
    body: { ...data },
  });
}
