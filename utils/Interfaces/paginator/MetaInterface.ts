import LinkInterface from "./LinkInterface";

interface MetaInterface {
    current_page: number;
    from: number;
    last_page: number;
    links: LinkInterface[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}
export default MetaInterface