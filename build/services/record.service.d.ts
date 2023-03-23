import { UrlQuery, SortOptions, SortOrder } from '../types';
interface PaginateQuery {
    skip: number;
    take: number;
}
interface SortBy<T extends SortOrder> {
    [key: string]: T['asc'] | T['desc'];
}
export declare abstract class RecordService<T extends SortOrder> {
    private urlQuery;
    abstract sortOptions: SortOptions<T>;
    constructor(urlQuery: UrlQuery);
    buildPagination: () => PaginateQuery;
    getSortOption: () => SortBy<T>;
}
export {};
