import ColumnMetaInterface from "@/utils/Interfaces/ColumnMetaInterface";

const TenantColumn: ColumnMetaInterface[] = [
    { field: 'name', header: 'Name' },
    { field: 'phone', header: 'Phone' },
    { field: 'occupation', header: 'Occupation' },
    { field: 'place_of_birth', header: 'Place of Birth' },
    { field: 'birthdate', header: 'Birthdate' },
    { field: 'original_address', header: 'Original Address' },
    { field: 'email', header: 'Email' },
    { field: 'identification_document', header: 'Identification Document' },
    { field: 'workplace', header: 'Workplace' },
    { field: 'school', header: 'School' },
    { field: 'workplace_address', header: 'Workplace Address' },
    { field: 'school_address', header: 'School Address' },
    { field: 'identification_document_filename', header: 'Identification Document Filename' },
    { field: 'emergency_contact_name', header: 'Emergency Contact Name' },
    { field: 'emergency_contact_phone', header: 'Emergency Contact Phone' },
    { field: 'created_at', header: 'Created At' },
    { field: 'updated_at', header: 'Updated At' },
    { field: 'deleted_at', header: 'Deleted At' }
];
export default TenantColumn