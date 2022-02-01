// TODO 檢查非正數
// TODO 檢查非數字
// TODO 依照輸入的數字數量，來設定 flexbox，例如輸入兩個數字，就用前者設定 top, bottom, 後者設定 left, right

function checkSpacingInput(result:SuggestionResults, query:string, spacingExample:string[]) {
  if (query === '') {
    result.setSuggestions(spacingExample)
  } else {
    const SuggesionValue = spacingExample ? spacingExample.filter(s => s.includes(query) && s !== query): []
    result.setSuggestions([query, ...SuggesionValue])
  }
}

function checkPaddingInput(result:SuggestionResults, query:string, paddingExample:string[]) {
  if (query === '') {
    result.setSuggestions(paddingExample)
  } else {
    const SuggesionValue = paddingExample ? paddingExample.filter(s => s.includes(query) && s !== query): []
    result.setSuggestions([query, ...SuggesionValue])
  }
}

figma.parameters.on('input', ({ key, query, result }: ParameterInputEvent) => {
  switch (key) {
    case 'alignDirection':
      const directions = ["VERTICAL", "HORIZONTAL"]
      result.setSuggestions(directions)
      break
    case 'itemSpacing':
      const spacingExample = ["12","24","32"]
      checkSpacingInput(result, query, spacingExample)
      break
    case 'padding':
      const paddingExample = ["24,12,24,12", "48,24,48,24"]
      checkPaddingInput(result, query, paddingExample)
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
    return figma.closePlugin("Done!")
  } else {
    return figma.closePlugin("Please select a frame.")
  }
})

function setPadding(parameters: ParameterValues, setFrame: FrameNode) {
  // split the string into array, and clean up the extra space bar
  let paddingValue = parameters.padding.split(',').map(x => parseInt(x))

  // It works just like setting padding in CSS.
  if(paddingValue.length == 1){
    setFrame.paddingTop = paddingValue[0]
    setFrame.paddingRight = paddingValue[0]
    setFrame.paddingBottom = paddingValue[0]
    setFrame.paddingLeft = paddingValue[0]
  } else if (paddingValue.length == 2) {
    setFrame.paddingTop = paddingValue[0]
    setFrame.paddingBottom = paddingValue[0]
    setFrame.paddingLeft = paddingValue[1]
    setFrame.paddingRight = paddingValue[1]
  } else if(paddingValue.length == 3) {
    setFrame.paddingTop = paddingValue[0]
    setFrame.paddingLeft = paddingValue[1]
    setFrame.paddingRight = paddingValue[1]
    setFrame.paddingBottom = paddingValue[2]
  } else {
    setFrame.paddingTop = paddingValue[0]
    setFrame.paddingRight = paddingValue[1]
    setFrame.paddingBottom = paddingValue[2]
    setFrame.paddingLeft = paddingValue[3]
  }

}