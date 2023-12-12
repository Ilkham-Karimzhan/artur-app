interface Description {
    src: string[];
    base: string;
    type: string;
    Fabric: string;
    pattern: string;
    fit: string;
    neck: string;
    sleeve: string;
    style: string;
    inner_length?: string;
    side_length?: string;
    width_bottom?: string;
    pocket?: string;
    zipper?: string;
    kit?: string;
}
export interface Good {
    id: number;
    created_at: string;
    rating: number;
    size: string[];
    color: string[];
    description: Description;
    count: number
    price: string;
    name: string
    on_sale: boolean;
    comments_count: number;
}
