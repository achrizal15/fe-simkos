type TypeTenantFormValues = {
    name: string,
    identification_document_filename: object | File |string,
    identification_document_filename_default?:string,
    identification_document: string,
    email: string,
    place_of_birth: string,
    birthdate: string,
    phone: string,
    original_address: string,
    emergency_contact_name: string,
    emergency_contact_phone: string,
    school: string,
    school_address: string,
    occupation: string,
    workplace_address: string,
    workplace:string
}
export default TypeTenantFormValues