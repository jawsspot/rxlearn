const createElem = (drop:any) => {
    const elem = document.createElement('div');
    elem.style.position = 'absolute';
    elem.style.marginTop = drop.x + 'px';
    elem.style.marginLeft = drop.y + 'px';
    elem.style.fontSize = '12px';
    elem.innerHTML = drop.d.reduce((acc: any, c:any) => (acc += '<br/>' + c), '');
    elem.style['color'] = `rgb(21, ${100 + drop.d.length * 10}, 21)`;
    return elem;
};
  
export const render = (matrix:any) => {
    document.body.innerHTML = '';
    const container = document.createElement('div');
    container.style.position = 'relative';
    matrix.forEach((m:any) => container.appendChild(createElem(m)));
    document.body.appendChild(container);
};