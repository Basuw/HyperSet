class CardToHtml {
  
  static create(card) {
    const gameWindow = document.querySelector('#main');
    const div = document.createElement('div');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    div.setAttribute('class','card');
    svg.setAttribute('class','item');
    svg.setAttribute('height','160');
    svg.setAttribute('width','80');
    svg.setAttribute('viewBox','0 0 200 400');
    
    // Create paths + add to svg
    for(let j = 0; j < 2; j++) {
      const path = this.createPath(card.shape,card.color,card.filling,card.outline,j);
      svg.appendChild(path);
    }

    // Loop to add svg card.number times
    for(let i = 0; i < card.number; i++) {
      div.appendChild(svg.cloneNode(true))
      console.log("+SVG: ",svg);
    }

    gameWindow.appendChild(div);
  }

  static createPath(shape,color,filling,outline,step) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    if(shape === null) shape = 'oval';
    if(color === null) color = '000000';
    if(filling === null) filling = 'fill';

    // Add lots of attributes
    path.setAttribute("d",SHAPE_PATH[shape]);
    path.setAttribute('stroke',`#${color}`);
    path.setAttribute('fill',`#${color}`);
    path.setAttribute('stroke-width','18');

    // Add svg attributes for shape outline
    if(outline !== null){
      Object.keys(OUTLINE_SPEC.rect).forEach(function(k){
        path.setAttribute(k,OUTLINE_SPEC.rect[k]);
      });

      path.setAttribute('stroke','#000000');
    }

    // Diff between two paths in svg
    if (step === 0) {
      path.setAttribute('mask',`url(#mask-${filling})`);
    } else {
      path.setAttribute('fill', 'none');
    }

    return path;
  }
}