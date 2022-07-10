export interface Artist {
	id?: string;
	_id?: string;
	firstName?: string;
	secondName?: string;
	middleName?: string;
	birthDate?: string;
	birthPlace?: string;
	country?: string;
	bands?: [string] | [object] | [];
	bandsIds?: [string];
	instruments?: [string];
}

export interface Artists {
	items: [Artist];
	limit: number;
	offset: number;
	total: number;
}
