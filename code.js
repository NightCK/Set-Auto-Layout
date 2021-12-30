var setTarget = figma.currentPage.selection[0]; // 記得要加 [0] 指定到陣列中的物件。
function setAutoLayout(parameters) {
    console.log(parameters);
    // if(setTarget.type === "FRAME") {
    //   setTarget.layoutMode = parameters
    // }
}
figma.parameters.on('input', ({ parameters, key, query, result }) => {
    switch (key) {
        case 'align-direction':
            const directions = ["Vertical", "Horizontal"];
            result.setSuggestions(directions.filter(s => s.includes(query))); // filter() 是一個方法，還不太確定原理。
            break;
    }
    return;
});
figma.on('run', ({ command, parameters }) => {
    switch (command) {
        case "Vertical":
        // setTarget.layoutMode = parameters // TODO
    }
});
