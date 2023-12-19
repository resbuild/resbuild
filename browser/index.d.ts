import type { ctx__be_T, ctx__get_T, ctx__set_T, lock_memosig_T, memo_T } from 'ctx-core/rmemo'
import type { Metafile } from 'esbuild'
import type { has_app_T, has_middleware_T } from '../ctx/index.js'
export declare const browser__metafile_path$_:ctx__be_T<has_app_T, memo_T<string>, 'app'>
export declare const browser__metafile_path_:ctx__get_T<has_app_T, string>
export declare const browser__metafile$_:ctx__be_T<has_app_T, lock_memosig_T<Metafile|undefined>, 'app'>
export declare const browser__metafile_:ctx__get_T<has_app_T, Metafile|undefined>
export declare const browser__metafile__set:ctx__set_T<has_app_T, Metafile|undefined>
export declare const browser__output__relative_path$_:ctx__be_T<has_middleware_T, memo_T<string>, 'middleware'>
export declare const browser__output__relative_path_:ctx__get_T<has_middleware_T, string>
export declare const browser__script$_:ctx__be_T<has_middleware_T, memo_T<string>, 'middleware'>
export declare const browser__script_:ctx__get_T<has_middleware_T, string>
