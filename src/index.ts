let styleElement: HTMLStyleElement = document.createElement('style')
document.head.appendChild(styleElement)

let styleSheet: CSSStyleSheet = styleElement.sheet
let index = 0

export function CreateStyle<TKey extends string>(rules: CssStyleConfig<TKey>): Classes<TKey>
{
    let result: Partial<Classes<TKey>> = {}

    for (let key in rules)
    {
        var newKey = key + '-' + (index++)
        result[key] = newKey
        CreateRule(`.${newKey}`, rules[key])
    }

    return result as any
}

function CreateRule(path: string, properties: Partial<CssProperties>)
{
    let rule = [path, ' { ']

    for (let key in properties)
    {
        if (key.startsWith(':'))
        {
            CreateRule(path + key, properties[key] as Partial<CssProperties>)
        }
        else if (key.startsWith('&'))
        {
            CreateRule(path + key.substring(1), properties[key] as Partial<CssProperties>)
        }
        else
        {
            var value = properties[key] as string
            if (typeof (value) == 'string')
            {
                key = key.replace(/[A-Z]/g, s => '-' + s.toLowerCase())
                rule.push(key, ' : ', value, '; ')
            }
            else
            {
                console.error('css property value must be string.', key)
            }
        }
    }

    rule.push(' }')
    styleSheet.insertRule(rule.join(''))
}

type Classes<TKey extends string> = {
    [key in TKey]: string
}

type CssStyleConfig<TKey extends string> = {
    [key in TKey]: Partial<CssProperties>
}

type CssProperties = {
    accentColor: string
    alignContent: string
    alignItems: string
    alignSelf: string
    all: string
    animation: string
    animationDelay: string
    animationDirection: string
    animationDuration: string
    animationFillMode: string
    animationIterationCount: string
    animationName: string
    animationPlayState: string
    animationTimingFunction: string
    aspectRatio: string
    backdropFilter: string
    backfaceVisibility: string
    background: string
    backgroundAttachment: string
    backgroundBlendMode: string
    backgroundClip: string
    backgroundColor: string
    backgroundImage: string
    backgroundOrigin: string
    backgroundPosition: string
    backgroundPositionX: string
    backgroundPositionY: string
    backgroundRepeat: string
    backgroundSize: string
    blockSize: string
    border: string
    borderBlock: string
    borderBlockColor: string
    borderBlockEnd: string
    borderBlockEndColor: string
    borderBlockEndStyle: string
    borderBlockEndWidth: string
    borderBlockStart: string
    borderBlockStartColor: string
    borderBlockStartStyle: string
    borderBlockStartWidth: string
    borderBlockStyle: string
    borderBlockWidth: string
    borderBottom: string
    borderBottomColor: string
    borderBottomLeftRadius: string
    borderBottomRightRadius: string
    borderBottomStyle: string
    borderBottomWidth: string
    borderCollapse: string
    borderColor: string
    borderEndEndRadius: string
    borderEndStartRadius: string
    borderImage: string
    borderImageOutset: string
    borderImageRepeat: string
    borderImageSlice: string
    borderImageSource: string
    borderImageWidth: string
    borderInline: string
    borderInlineColor: string
    borderInlineEndColor: string
    borderInlineEndStyle: string
    borderInlineEndWidth: string
    borderInlineStartColor: string
    borderInlineStartStyle: string
    borderInlineStartWidth: string
    borderInlineStyle: string
    borderInlineWidth: string
    borderLeft: string
    borderLeftColor: string
    borderLeftStyle: string
    borderLeftWidth: string
    borderRadius: string
    borderRight: string
    borderRightColor: string
    borderRightStyle: string
    borderRightWidth: string
    borderSpacing: string
    borderStartEndRadius: string
    borderStartStartRadius: string
    borderStyle: string
    borderTop: string
    borderTopColor: string
    borderTopLeftRadius: string
    borderTopRightRadius: string
    borderTopStyle: string
    borderTopWidth: string
    borderWidth: string
    bottom: string
    boxDecorationBreak: string
    boxReflect: string
    boxShadow: string
    boxSizing: string
    breakAfter: string
    breakBefore: string
    breakInside: string
    captionSide: string
    caretColor: string
    clear: string
    clip: string
    color: string
    columnCount: string
    columnFill: string
    columnGap: string
    columnRule: string
    columnRuleColor: string
    columnRuleStyle: string
    columnRuleWidth: string
    columnSpan: string
    columnWidth: string
    columns: string
    content: string
    counterIncrement: string
    counterReset: string
    cursor: string
    display: string
    emptyCells: string
    filter: string
    flex: string
    flexBasis: string
    flexDirection: string
    flexFlow: string
    flexGrow: string
    flexShrink: string
    flexWrap: string
    float: string
    font: string
    fontFamily: string
    fontFeatureSettings: string
    fontKerning: string
    fontSize: string
    fontSizeAdjust: string
    fontStretch: string
    fontStyle: string
    fontVariant: string
    fontVariantCaps: string
    fontWeight: string
    gap: string
    grid: string
    gridArea: string
    gridAutoColumns: string
    gridAutoFlow: string
    gridAutoRows: string
    gridColumn: string
    gridColumnEnd: string
    gridColumnGap: string
    gridColumnStart: string
    gridGap: string
    gridRow: string
    gridRowEnd: string
    gridRowGap: string
    gridRowStart: string
    gridTemplate: string
    gridTemplateAreas: string
    gridTemplateColumns: string
    gridTemplateRows: string
    hangingPunctuation: string
    height: string
    hyphens: string
    imageRendering: string
    inlineSize: string
    inset: string
    insetBlock: string
    insetBlockEnd: string
    insetBlockStart: string
    insetInline: string
    insetInlineEnd: string
    insetInlineStart: string
    isolation: string
    justifyContent: string
    justifyItems: string
    justifySelf: string
    left: string
    letterSpacing: string
    lineHeight: string
    listStyle: string
    listStyleImage: string
    listStylePosition: string
    listStyleType: string
    margin: string
    marginBlock: string
    marginBlockEnd: string
    marginBlockStart: string
    marginBottom: string
    marginInline: string
    marginInlineEnd: string
    marginInlineStart: string
    marginLeft: string
    marginRight: string
    marginTop: string
    maskImage: string
    maskMode: string
    maskOrigin: string
    maskPosition: string
    maskRepeat: string
    maskSize: string
    maxHeight: string
    maxWidth: string
    maxBlockSize: string
    maxInlineSize: string
    minBlockSize: string
    minInlineSize: string
    minHeight: string
    minWidth: string
    mixBlendMode: string
    objectFit: string
    objectPosition: string
    offset: string
    offsetAnchor: string
    offsetDistance: string
    offsetPath: string
    offsetRotate: string
    opacity: string
    order: string
    orphans: string
    outline: string
    outlineColor: string
    outlineOffset: string
    outlineStyle: string
    outlineWidth: string
    overflow: string
    overflowAnchor: string
    overflowWrap: string
    overflowX: string
    overflowY: string
    overscrollBehavior: string
    overscrollBehaviorBlock: string
    overscrollBehaviorInline: string
    overscrollBehaviorX: string
    overscrollBehaviorY: string
    padding: string
    paddingBlock: string
    paddingBlockEnd: string
    paddingBlockStart: string
    paddingBottom: string
    paddingInline: string
    paddingInlineEnd: string
    paddingInlineStart: string
    paddingLeft: string
    paddingRight: string
    paddingTop: string
    pageBreakAfter: string
    pageBreakBefore: string
    pageBreakInside: string
    paintOrder: string
    perspective: string
    perspectiveOrigin: string
    placeContent: string
    placeItems: string
    placeSelf: string
    pointerEvents: string
    position: string
    quotes: string
    resize: string
    right: string
    rotate: string
    rowGap: string
    scale: string
    scrollBehavior: string
    scrollMargin: string
    scrollMarginBlock: string
    scrollMarginBlockEnd: string
    scrollMarginBlockStart: string
    scrollMarginBottom: string
    scrollMarginInline: string
    scrollMarginInlineEnd: string
    scrollMarginInlineStart: string
    scrollMarginLeft: string
    scrollMarginRight: string
    scrollMarginTop: string
    scrollPadding: string
    scrollPaddingBlock: string
    scrollPaddingBlockEnd: string
    scrollPaddingBlockStart: string
    scrollPaddingBottom: string
    scrollPaddingInline: string
    scrollPaddingInlineEnd: string
    scrollPaddingInlineStart: string
    scrollPaddingLeft: string
    scrollPaddingRight: string
    scrollPaddingTop: string
    scrollSnapAlign: string
    scrollSnapStop: string
    scrollSnapType: string
    scrollbarColor: string
    tabSize: string
    tableLayout: string
    textAlign: string
    textAlignLast: string
    textDecoration: string
    textDecorationColor: string
    textDecorationLine: string
    textDecorationStyle: string
    textDecorationThickness: string
    textEmphasis: string
    textIndent: string
    textJustify: string
    textOrientation: string
    textOverflow: string
    textShadow: string
    textTransform: string
    top: string
    transform: string
    transformOrigin: string
    transformStyle: string
    transition: string
    transitionDelay: string
    transitionDuration: string
    transitionProperty: string
    transitionTimingFunction: string
    translate: string
    unicodeBidi: string
    direction: string
    userSelect: string
    verticalAlign: string
    visibility: string
    whiteSpace: string
    widows: string
    width: string
    wordBreak: string
    wordSpacing: string
    wordWrap: string
    writingMode: string
    zIndex: string

    [key: string]: string | Partial<CssProperties>

    '&': Partial<CssProperties>

    ':active': Partial<CssProperties>
    ':checked': Partial<CssProperties>
    ':focus': Partial<CssProperties>
    ':hover': Partial<CssProperties>

    ':default': Partial<CssProperties>
    ':empty': Partial<CssProperties>
    ':optional': Partial<CssProperties>
    ':required': Partial<CssProperties>
    ':target': Partial<CssProperties>
    ':visited': Partial<CssProperties>
    ':fullscreen': Partial<CssProperties>
    ':root': Partial<CssProperties>

    ':valid': Partial<CssProperties>
    ':invalid': Partial<CssProperties>

    ':disabled': Partial<CssProperties>
    ':enabled': Partial<CssProperties>

    ':first-child': Partial<CssProperties>
    ':last-child': Partial<CssProperties>
    ':only-child': Partial<CssProperties>

    '::after': Partial<CssProperties>
    '::before': Partial<CssProperties>

    '::first-letter': Partial<CssProperties>
    '::first-line': Partial<CssProperties>

    ':first-of-type': Partial<CssProperties>
    ':last-of-type': Partial<CssProperties>
    ':only-of-type': Partial<CssProperties>

    '::placeholder': Partial<CssProperties>
    '::selection': Partial<CssProperties>
}
