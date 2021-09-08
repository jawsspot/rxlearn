const drop = (x: number, y: number) => ({ x, y, d: [], remove: false });
const random = (max: number) => Math.floor(Math.random() * Math.floor(max));
const ranodmChar = () => String.fromCharCode(random(128));

export const markForRemoval = (matrix: Array<any>) =>
  matrix.forEach(
    drop => (drop.remove = drop.remove ? true : drop.d.length > 20)
  );
export const updateDrops = (matrix: Array<any>) =>
  matrix.forEach(
    drop =>
      (drop.d = drop.remove
        ? drop.d.slice(1).map((e:any) => ranodmChar())
        : [ranodmChar(), ...drop.d.map((e:any) => ranodmChar())])
  );
export const updateMatrix = (matrix: Array<any>) => [
  ...matrix,
  drop(random(window.innerHeight) / 4, random(window.innerWidth))
];