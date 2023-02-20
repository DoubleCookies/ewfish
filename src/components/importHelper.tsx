export function importAll(r: any): Map<string, string> {
  let myMap = new Map<string, string>();
  if (!r) {
    return myMap;
  }
  console.log('r', r.keys());
  r.keys().forEach((item: string) => {
    myMap.set(getTrimName(item), r(item));
  });
  return myMap;
}

function getTrimName(text: string): string {
  return text.substring(2, text.lastIndexOf('.'));
}
