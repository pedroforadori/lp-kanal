
// Translates an object into a query string.
// Ex: {a:1, b:2} => 'a=1&b=2' 
export function appendObjectToQueryURL<T>(obj: T, keepFirstAmpersand = false ): string {

  let url = '';

  (Object.keys(obj) as (keyof typeof obj)[]).forEach((key) => {
    if(obj[key]) url += `&${String(key)}=${encodeURIComponent(String(obj[key]))}`
  })

  return keepFirstAmpersand ? url : url.slice(1);
}


export function mapObjectsToQueryURL<T extends {[key: string]: string}>(map: T, values: IObjectMap): string {
  let result = '';
  Object.entries(values).forEach(([key, val]) => {
    console.log(typeof val)
  });
  return result;
}