export interface UrlQuery {
    pageSize?: string;
    pageNo?: string;
    sort?: string;
    name?: string;
}
export interface SortOrder {
    asc: 'asc' | 'ASC';
    desc: 'desc' | 'DESC';
}
export interface MongoSortOrder {
    asc: 'asc';
    desc: 'desc';
}
export interface PostgresSortOrder {
    asc: 'ASC';
    desc: 'DESC';
}
export interface SortOptions<T extends SortOrder> {
    newest?: {
        createdAt: T['desc'];
    };
    oldest?: {
        createdAt: T['asc'];
    };
    popular?: {
        [key: string]: T['desc'];
    };
    name?: {
        [key: string]: T['asc'];
    };
}
