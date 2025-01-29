export type TShapeString = 'rect' | 'circle' | 'triangle'

export type TCircleShape = {
    id: string,
    type: TShapeString
    x: number,
    y: number,
    size: number,
    color: string
}
