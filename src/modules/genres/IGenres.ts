export interface IGenre {
	id?: string;
	_id?: string;
	name?: string;
	description?: string;
	country?: string;
	year?: number;
}

export interface IGenres {
	items: [IGenre];
	limit: number;
	offset: number;
	total: number;
}
