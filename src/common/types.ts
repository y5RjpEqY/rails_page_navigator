export type PathList = {
    [key: string]: Path
}

export type Path = {
    path: string,
    params: string[]
}

export type Option = {
    value: string,
    label: string
}