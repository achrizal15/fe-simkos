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
    },
    // { field: 'place_of_birth', header: 'Place of Birth' },
    // { field: 'birthdate', header: 'Birthdate' },
    // { field: 'identification_document', header: 'Identification Document' },
    // { field: 'workplace', header: 'Workplace' },
    // { field: 'school', header: 'School' },
    // { field: 'workplace_address', header: 'Workplace Address' },
    // { field: 'school_address', header: 'School Address' },
    // { field: 'identification_document_filename', header: 'Identification Document Filename' },
    // { field: 'updated_at', header: 'Updated At' },
    // { field: 'deleted_at', header: 'Deleted At' }
];
export default TenantColumn