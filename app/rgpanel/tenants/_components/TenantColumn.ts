import ColumnMetaInterface from "@/utils/Interfaces/ColumnMetaInterface";

const TenantColumn: ColumnMetaInterface[] = [
    { field: 'name', header: 'Nama' },
    { field: 'email', header: 'Email' },
    { field: 'phone', header: 'No. Handphone' },
    { field: 'occupation', header: 'Pekerjaan' },
    // { field: 'place_of_birth', header: 'Place of Birth' },
    // { field: 'birthdate', header: 'Birthdate' },
    { field: 'original_address', header: 'Alamat Asli' },
    { field: 'emergency_contact_name', header: 'Nama Keluarga Dekat' },
    { field: 'emergency_contact_phone', header: 'No. Handphone Keluarga Dekat' },
    { field: 'created_at', header: 'Tanggal Registrasi' },
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