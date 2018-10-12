export const SHOW_GIPHY_DISPLAY = 'SHOW_GIPHY_DISPLAY';
export const HIDE_GIPHHY_DISPLAY = 'HIDE_GIPHY_DISPLAY';

export const showGiphyDisplay = (giphy) => ({
    type: SHOW_GIPHY_DISPLAY,
    giphy
})

export const hideGiphyDisplay = () => ({
    type: HIDE_GIPHHY_DISPLAY,
})