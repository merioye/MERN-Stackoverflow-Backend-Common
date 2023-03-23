"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordService = void 0;
class RecordService {
    constructor(urlQuery) {
        this.buildPagination = () => {
            const pageSize = Number(this.urlQuery.pageSize) || 10;
            const pageNo = Number(this.urlQuery.pageNo) || 1;
            const skip = pageSize * (pageNo - 1);
            return { skip, take: pageSize };
        };
        this.getSortOption = () => {
            const sortOption = this.urlQuery.sort;
            if (sortOption) {
                const sortBy = this.sortOptions[sortOption];
                return sortBy ? sortBy : {};
            }
            else {
                return {};
            }
        };
        this.urlQuery = urlQuery;
    }
}
exports.RecordService = RecordService;
//# sourceMappingURL=record.service.js.map