// TODO 可以限制只能輸入數字嗎？
// TODO paremeter.on 要做檢查是否有物件被選擇、檢查 node type 是否為 FRAME
function SetAutoLayout() {
    const setLayer = figma.currentPage.selection[0];
    // TODO 一定要用 if 設定 setLayer 的 type 是 FRAME 嗎？
    if (setLayer.type === "FRAME") {
        setLayer.layoutMode = "VERTICAL";
        setLayer.paddingLeft = 24;
        setLayer.paddingRight = 24;
        setLayer.paddingTop = 16;
        setLayer.paddingBottom = 16;
        setLayer.itemSpacing = 12;
        // TODO 這邊要做一個 else 顯示不是 FRAME 的 error
        return;
    }
}
SetAutoLayout();
figma.closePlugin("Done!");
