figma.parameters.on('input', ({ key, query, result }: ParameterInputEvent) => {
  switch (key) {
    case 'alignDirection':
      const directions = ["VERTICAL", "HORIZONTAL"]
      result.setSuggestions(directions.filter(s => s.includes(query.toUpperCase()) && s !== query))
      break
    case 'itemSpacing':
      const spacingExample = ["12","24","32"]
      result.setSuggestions(spacingExample.filter(s => s.includes(query) && s !== query))
      break
    case 'padding':
      const paddingExample = ["24,12,24,12", "48,24,48,24"]
      result.setSuggestions(paddingExample.filter(s => s.includes(query)))
      break
  }
  return
})

figma.on('run', ({ parameters }: RunEvent) => {
  if(figma.currentPage.selection[0].type === "FRAME") {
    let setFrame = figma.currentPage.selection[0]
    setFrame.layoutMode = parameters.alignDirection
    setPadding(parameters, setFrame)
    setFrame.itemSpacing = parseInt(parameters.itemSpacing)
    return figma.closePlugin("TADA!")
  } else {
    return figma.closePlugin("Please select a frame.")
  }
})

function setPadding(parameters: ParameterValues, setFrame: FrameNode) {
  // 將得到的陣列分別對應到 padding-left, top, right, bottom

  // split the string into array, and clean up the extra space bar
  let paddingValue = parameters.padding.split(',').map(x => parseInt(x))
  setFrame.paddingLeft = paddingValue[0]
  setFrame.paddingTop = paddingValue[1]
  setFrame.paddingRight = paddingValue[2]
  setFrame.paddingBottom = paddingValue[3]
}