export type TShape = 'rect' | 'circle' | 'triangle'

export type TCircleShape = {
    id: string,
    type: TShape
    x: number,
    y: number,
    size: number,
    color: string
}
