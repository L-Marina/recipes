type VolumeType = {
	value: number,
	unit: string,
}
type MashTempType = {
	temp?: VolumeType,
	duration: number,
}
type FermentationType ={
	temp?: VolumeType,
	twist: null,
 }
type MethodType = {
	mash_temp?: Array<MashTempType>,
	fermentation: FermentationType,
 }
type IngredientsType = {
	malt?: Array<MaltType>
	hops: Array<HopsType>
	yeast: string,
}
type MaltType = {
	name: string,
	amount: AmountType,
}
type AmountType = {
	value: number,
	unit: string,
}
type HopsType = {
	name: string,
	amount: AmountType,
	add: string,
	attribute: string,
}
export interface IRecipe {
	id: number,
	name: string,
	tagline: string,
	first_brewed: number,
	description: string,
	image_url: string,
	abv: number,
	ibu: number,
	target_fg: number,
	target_og: number,
	ebc: number,
	srm: number,
	ph: number,
	attenuation_level: number,
	volume: VolumeType,
	boil_volume: VolumeType,
	method: MethodType,
	ingredients: IngredientsType,
	food_pairing: Array<string>,
	brewers_tips: string,
	contributed_by: string,
}
export interface RecipeState {
	recipes: IRecipe[];
	loading: boolean;
	error: null | string;
	page: number;
	limit: number;
}
