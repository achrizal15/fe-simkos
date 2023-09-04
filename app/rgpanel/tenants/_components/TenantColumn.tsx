import { format } from "@/constant/moment";
import ColumnMetaInterface from "@/utils/Interfaces/ColumnMetaInterface";
import TenantInterface from "@/utils/Interfaces/TenantItemInterface";
import moment from "moment";

const TenantColumn: ColumnMetaInterface[] = [
    { field: 'name', header: 'Nama' },
    { field: 'email', header: 'Email' },
    { field: 'phone', header: 'No. Handphone' },
    { field: 'occupation', header: 'Pekerjaan' },
    { field: 'original_address', header: 'Alamat Asli' },
    { field: 'emergency_contact_name', header: 'Nama Keluarga Dekat' },
    { field: 'emergency_contact_phone', header: 'No. Handphone Keluarga Dekat' },
    {
        field: 'created_at', header: 'Tanggal Registrasi', body: (item: TenantInterface) => {
            return moment(item.created_at).format(format.formatDateTime)
        }
    }
];
export default TenantColumn