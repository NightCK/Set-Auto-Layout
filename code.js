figma.parameters.on('input', ({ parameters, key, query, result }) => {
    switch (key) {
        case 'align-direction':
            const directions = ['Vertical', 'Horizontal'];
            result.setSuggestions(directions.filter(s => s.includes(query))); // filter() 是一個方法，還不太確定原理。
            break;
        default:
            break;
    }
    return;
});
function setAutoLayout(parameters) {
    var setTarget = figma.currentPage.selection;
    console.log(setTarget);
    // if(setTarget.type === "FRAME") {
    // }
}
