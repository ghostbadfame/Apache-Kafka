import { ICatalogRepository } from "../interface/catalogRepositry.interface";

export class CatalogService {
    private _repository:ICatalogRepository
    constructor(repository: ICatalogRepository)
    {
        this._repository = repository
    }

    createProduct(input: any){

    }

    updateProduct(input: any){

    }
    // limit and offset is very necessary for handling large amount of data
    getProducts(limit: number, offset:number)  
    {

    }

    getProduct(id: number)  
    {

    }

    deleteProduct(id:number){}
}