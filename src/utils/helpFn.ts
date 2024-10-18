
export const delay = (time = 500): Promise<number> => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(1)
        }, time)
    })
}