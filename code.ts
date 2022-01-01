figma.parameters.on('input', ({ key, query, result }: ParameterInputEvent) => {
  switch (key) {
    case 'alignDirection':
      const directions = ["VERTICAL", "HORIZONTAL"]
      result.setSuggestions(directions.filter(s => s.includes(query))) // filter() 是一個方法，還不太確定原理。
      break;
  }
  return
})


figma.on('run', ({ parameters }: RunEvent) => {

  if(figma.currentPage.selection[0].type === "FRAME") {
    figma.currentPage.selection[0].layoutMode = parameters.alignDirection
    return figma.closePlugin("TADA!")
  } else {
    return figma.closePlugin("Please select a frame.")
  }
})