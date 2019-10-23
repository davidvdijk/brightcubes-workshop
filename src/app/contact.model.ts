export interface Contact {
    cell: string;
    dob: {
        day: Date;
        age: number;
    };
    email: string;
    gender: string;
    id: {
        name: string;
        value: string;
    };
    location: {
        city: string;
        coordinates: {
            longitude: string;
            latitude: string;
        };
        country: string;
        postcode: number;
        state: string;
        street: {
            number: number;
            name: string;
        };
        timezone: {
            offset: string;
            description: string;
        };
    };
    login: {
        md5: string;
        password: string;
        salt: string;
        sha1: string;
        sha256: string;
        username: string;
        uuid: string;
    };
    name: {
        title: string;
        first: string;
        last: string;
    };
    nat: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    registered: {
        age: number;
        date: Date;
    }
}
