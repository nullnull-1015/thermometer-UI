import './Digit.css';

// 適切な CSS を当てて7セグ表示をする
// https://qiita.com/n4o847/items/30b0f542f155232bf4d1
const classes = ["d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9"]

export const Digit = ({ number, color, bgColor, scale }) => {
    const clipped = Math.max(0, Math.min(number, classes.length-1));
    document.documentElement.style.setProperty('--digit-color', color);
    document.documentElement.style.setProperty('--digit-bg-color', bgColor);

    return (
        <div className={"display "+classes[clipped]} style={{transform: 'scale('+scale+')' }}></div>
    )
}