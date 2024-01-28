export interface Wallet {
    name: string;
    color: string;
    balance: number;
    invoice?: number;
    currency?: string;
}