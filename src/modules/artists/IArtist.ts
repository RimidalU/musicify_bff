export interface IArtist {
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

export interface IArtists {
	items: [IArtist];
	limit: number;
	offset: number;
	total: number;
}
