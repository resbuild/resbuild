import type { ctx__be_T, ctx__get_T, ctx__set_T, Ctx_wide_T } from 'ctx-core/be'
import type { lock_memosig_T } from 'ctx-core/rmemo'
export declare function asset_path_(mod_promise:Promise<{ default:string }>):Promise<string>
export declare function asset_path_a_<
	Tuple extends [...Promise<{ default:string }>[]]
>(...mod_promise_a:Tuple):Promise<{
	[Index in keyof Tuple]:string
}>
export declare const assets$_:ctx__be_T<has_route_T, lock_memosig_T<assets_T>, 'route'>
export declare const assets_:ctx__get_T<has_route_T, assets_T>
export declare const assets__set:ctx__set_T<has_route_T, assets_T>
export declare function assets__assign<ctx_T extends has_route_T>(
	ctx:ctx_T,
	..._assets_a:assets_T[]):assets_T
export declare function assets__new(..._assets_a:assets_T[]):assets_T
export type assets_T = {
	css_a?:string[]
	script_a?:string[]
}
type has_route_T = Ctx_wide_T<'route'>
