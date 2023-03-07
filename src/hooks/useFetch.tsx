type useFetchReturn = {
  request: <T>(url:string, config?:RequestInit) => Promise<T>;
}

const useFetch = () => {
  //TODO fetch IUGU APIs with localMainApiToken

  function request<T>(url:string, config:RequestInit = {}):Promise<T> {
    return fetch(url, config)
      .then((response) => response.json())
      .then((data) => data as T);
  }

  return {
    request,
  } as useFetchReturn;
}

export default useFetch