export interface Jwt {
    aud: string;
    jti: string;
    iat: number;
    nbf: number;
    exp: number;
    sub: string;
    scopes: string[];
}
