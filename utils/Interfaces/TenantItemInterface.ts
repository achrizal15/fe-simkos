interface TenantInterface {
    id: number;
    name: string;
    phone: string;
    occupation: string;
    place_of_birth: string;
    birthdate: string;
    original_address: string;
    email: string;
    identification_document: string | null;
    workplace: string | null;
    school: string | null;
    workplace_address: string | null;
    school_address: string | null;
    identification_document_filename: string | null;
    emergency_contact_name: string | null;
    emergency_contact_phone: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string
}

export default TenantInterface;
