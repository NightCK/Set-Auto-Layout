// function setAutoLayout(alignDirection) {
//   console.log("alignDirection = ", alignDirection)
//   if(figma.currentPage.selection[0].type === "FRAME") {
//     var setTarget = figma.currentPage.selection[0] // 記得要加 [0] 指定到陣列中的物件。
//     // setTarget.layoutMode = alignDirection
//     figma.closePlugin("TADA!")
//   } else {
//     figma.closePlugin("Please select a frame.")
//   }
// }
figma.parameters.on('input', ({ key, query, result }) => {
    switch (key) {
        case 'align-direction':
            const directions = ["VERTICAL", "HORIZONTAL"];
            result.setSuggestions(directions.filter(s => s.includes(query))); // filter() 是一個方法，還不太確定原理。
            break;
    }
    return;
});
figma.on('run', ({ command, parameters }) => {
    console.log(command);
    console.log(parameters);
    if (figma.currentPage.selection[0].type === "FRAME") {
        var setTarget = figma.currentPage.selection[0]; // 記得要加 [0] 指定到陣列中的物件。
        // setTarget.layoutMode = parameters
        return figma.closePlugin("TADA!");
    }
    else {
        return figma.closePlugin("Please select a frame.");
    }
});
