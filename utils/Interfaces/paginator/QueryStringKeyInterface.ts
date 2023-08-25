interface QueryStringKeyInterface {
    page: number,
    search?: string,
    sortField?: string,
    sortOrder?: 1 | -1 | 0,
    withTrash: boolean
}
export default QueryStringKeyInterface