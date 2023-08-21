import { JWT } from "next-auth/jwt";

interface UserJwtInterface extends JWT {
    token: string,
    email: string,
    name: string
}
export default UserJwtInterface