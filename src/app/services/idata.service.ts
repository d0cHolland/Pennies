export interface IDataService{
    Get<T>():T[];
    GetById<T>(id:any):T;
    Add<T>(record:T):void;
    Save<T>(record:T):void;
    Delete<T>(record:T):void;
}