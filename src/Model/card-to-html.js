class CardToHtml {
  static create(card) {
    const gameWindow = document.querySelector('#main');
    let div = document.createElement('div');
    div.setAttribute('class','card');
    gameWindow.appendChild(div);

    const svg = this.createPath(card.shape,card.color,card.filling,card.outline);

    div.appendChild(svg);
  }

  createSVG(shape,color,filling,outline) {
    if(shape === null) shape = "oval";
    if(color === null) color = "#000000";
    if(filling === null) filling = "fill";

    // Can be optimized by just adding svg as string -> svg is constant
    // class="item" height="160" width="80" viewBox="0 0 200 400"
    const svg = document.createElement('svg');
    svg.setAttribute("class","item");
    svg.setAttribute("height","160");
    svg.setAttribute("width","80");
    svg.setAttribute("viewBox","0 0 200 400");

    const path = document.createElement('path');

    path.setAttribute("d",SHAPE_PATH[shape]);

    if(outline !== null){
      Object.keys(OUTLINE_SPEC[outline]).forEach(function(k){
        path.setAttribute(k,OUTLINE_SPEC[outline[k]]);
      });

      path.setAttribute("stroke","#000000");
    }

    path.setAttribute("stroke",color);
    path.setAttribute("fill",color);
    path.setAttribute("mask","none");

    svg.appendChild(path);

    return svg;
  }
}