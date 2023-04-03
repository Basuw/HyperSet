class CardToHtml {
  
  static create(card) {
    // const gamewindow = document.querySelector('#main');
    const div = document.createElement('div');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    div.setAttribute('class','card');
    svg.setAttribute('class','item');
    svg.setAttribute('height','160');
    svg.setAttribute('width','80');
    svg.setAttribute('viewBox','0 0 200 400');

    if(card.attributes['number'] == undefined){
      card.attributes['number'] = 1;
    }
    
    // Create paths + add to svg
    for(let j = 0; j < 2; j++) {
      // Faut pas oublier le j à la fin hein, c'est pas une typo
      const path = this.createPath(card.attributes['shape'], card.attributes['color'], card.attributes['filling'], card.attributes['outline'], j);
      svg.appendChild(path);
    }

    // Loop to add svg card.number times
    for(let i = 0; i < card.attributes['number']; i++) {
      div.appendChild(svg.cloneNode(true))
    }

    // gamewindow.appendChild(div);
    return div;
  }

  static createPath(shape,color,filling,outline,step) {
    // The way to create svg element (differs from html element)
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    if(shape === undefined) shape = 'oval';
    if(color === undefined) color = 'black';
    if(filling === undefined) filling = 'empty';

    // Add lots of attributes
    path.setAttribute("d",SHAPE_PATH[shape]);
    path.setAttribute('stroke',`${color}`);
    path.setAttribute('fill',`${color}`);
    path.setAttribute('stroke-width','18');

    // Case shape do not have color
    if(filling === 'none' || filling === 'empty') {
      path.setAttribute('fill','none');
    }

    // Add svg attributes for shape outline
    if(outline !== null && outline!==undefined) {
      Object.keys(OUTLINE_SPEC[outline]).forEach(function(k) {
        path.setAttribute(k,OUTLINE_SPEC[outline][k]);
      });
      if(filling == 'empty') path.setAttribute('stroke',color);
      else path.setAttribute('stroke','black');
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