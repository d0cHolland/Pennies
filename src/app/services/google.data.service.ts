import { IDataService } from './idata.service';

export class GoogleDocs implements IDataService{
    
    public Get<T>():T[]{
        throw "Not Yet Implemented";
    }

    public GetById<T>():T{
        throw "Not Yet Implemented";
    }

    public Add<T>(obj:T):void{
        throw "Not Yet Implemented";
    }

    public Save<T>(obj:T):void{
        throw "Not Yet Implemented";
    }

    public Delete<T>(obj:T):void{
        throw "Not Yet Implemented";
    }

}