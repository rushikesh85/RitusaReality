export interface Property {
    id: number;
    title: string;
    category: 'Residential' | 'Commercial';
    imageUrl: string;
    description?: string;
    price?: string;
    location?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface EmailJSConfig {
    serviceId: string;
    templateId: string;
    publicKey: string;
}
