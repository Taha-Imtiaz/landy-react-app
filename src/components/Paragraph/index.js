import React from 'react'
import * as S from "./styles"

const fontWeightEstimator = (weightStr) => {
    switch (weightStr) {
        case "light":
        return 300

        case "regular":
            return 400

            case "semiBold":
                return 600
                case "bold":
                    return 700
            default:
                return 400;
    }
}

const Paragraph = ({children, fontSize = 16, fontWeight = "regular", color = "black", style = {},...restProps}) => {
    let fontWeightValue =fontWeightEstimator(fontWeight)
    let fontSizeValue = fontSize/10;
    console.log(fontSizeValue)

    return (
        <S.ParagraphComponet {...restProps}  style={{fontWeight:fontWeightValue, fontSize: `${fontSizeValue}em`, color,  ...style}}>
         {  children}
        </S.ParagraphComponet>
    )
}

export default Paragraph
