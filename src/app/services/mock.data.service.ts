import { IDataService } from './idata.service';

export class MockDataService<T> implements IDataService{
    private collection:T[] = [];
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