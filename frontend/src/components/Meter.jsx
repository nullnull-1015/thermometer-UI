import { Digit } from "./Digit"
import "./Meter.css"

export const Meter = ({ number=1, color, bgColor, scale }) => {
    const digits = number.toString().split('')
    let afterDot = false

    const dot = (<div key={number} className="display dot"></div>);
    const minus = (<div key={number+1} className="display minus"></div>)

    return (
        <div className="meter">
            {digits.map((digit, index) => {
                if (digit === ".") {
                    afterDot = true
                    return dot
                }
                else if (digit === "-") {
                    return minus
                }
                else {
                    return <Digit key={index} number={Number(digit)} color={color} bgColor={bgColor} scale={afterDot ? scale*0.8 : scale} />
                }
            })}
        </div>
    )
}