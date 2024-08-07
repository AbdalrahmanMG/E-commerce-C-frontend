export interface IProduct {
    id:number
    attributes: {
        title:string,
        description: string,
        price: number,
        stock: number,
        thumbnail: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
    }
}