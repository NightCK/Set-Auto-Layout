function setPadding(parameters) {
      // 判斷是否為數字、整數
      // 判斷是否為正數
      // 判斷有幾個數字
      // 有一個數字，將 padding top, right, bottom, left 都設為該數字。
      // 有兩個數字，將 padding top, bottom 設為前者數字，padding left, right 設為後者數字。
      // 有三個數字，將第一個數字給 padding top，第二個給 padding left, right，第三個給 padding bottom。
      // 有四個數字，將每個數字個別對應給 padding top, right, bottom, left。
}

figma.parameters.on('input', ({ key, query, result }: ParameterInputEvent) => {
  switch (key) {
    case 'alignDirection':
      const directionsSuggestion = ["VERTICAL", "HORIZONTAL"]
      result.setSuggestions(directionsSuggestion.filter(s => s.includes(query))) // filter() 是一個方法，還不太確定原理。
      break
    case 'padding':
      
  }
  return
})


figma.on('run', ({ parameters }: RunEvent) => {

      if(figma.currentPage.selection[0].type === "FRAME") {
        console.log("I am in if")
        figma.currentPage.selection[0].layoutMode = parameters.alignDirection
        figma.closePlugin("Done!")
      } else {
          console.log("I am in else")
          figma.closePlugin("Please select a frame.")
      }

})