import { file_exists_ } from 'ctx-core/fs'
import { nullish__none_, waitfor } from 'ctx-core/function'
import { be_lock_memosig_triple_, be_memo_pair_ } from 'ctx-core/rmemo'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative } from 'path'
import { browser__relative_path_, browser_path_ } from '../app/index.js'
import { app_ctx } from '../ctx/index.js'
import { server__output_ } from '../server/index.js'
export const [
	browser__metafile_path$_,
	browser__metafile_path_,
] = be_memo_pair_(ctx=>
	join(browser_path_(ctx), 'metafile.json'),
{ ns: 'app', id: 'browser__metafile_path' })
let browser__metafile__waitfor_promise
export const [
	browser__metafile$_,
	browser__metafile_,
	browser__metafile__set
] = /** @type {be_lock_memosig_triple_T<rebuildjs_metafile_T>} */
	be_lock_memosig_triple_(()=>
		undefined,
	async (ctx, browser__metafile$)=>{
		browser__metafile__waitfor_promise?.cancel?.()
		let metafile_path
		if (!browser__metafile$.lock) {
			metafile_path = browser__metafile_path_(ctx)
			browser__metafile__waitfor_promise = waitfor(
				()=>file_exists_(metafile_path),
				200
			).catch(()=>false)
			if (await browser__metafile__waitfor_promise && metafile_path === browser__metafile_path_(ctx)) {
				browser__metafile$._ = await readFile(metafile_path).then(buf=>JSON.parse(buf + ''))
			}
		}
	}, { ns: 'app', id: 'browser__metafile' })
export function browser__metafile__persist() {
	return nullish__none_([
		browser__metafile_path_(app_ctx),
		browser__metafile_(app_ctx)
	], async (browser__metafile_path, browser__metafile)=>{
		await mkdir(browser_path_(app_ctx), { recursive: true })
		await writeFile(
			browser__metafile_path,
			JSON.stringify(browser__metafile, null, '\t'))
	})
}
export const [
	browser__output__relative_path$_,
	browser__output__relative_path_
] = be_memo_pair_(ctx=>
	nullish__none_([browser__metafile_(ctx), server__output_(ctx)],
		(browser__metafile, server__output)=>{
			const { outputs } = browser__metafile
			for (const browser__output__relative_path in outputs) {
				const browser__output = outputs[browser__output__relative_path]
				if (
					browser__output.entryPoint
					&& browser__output.entryPoint ===
					server__output.entryPoint.replace(/\.server\.(ts|js|tsx|jsx)/, '.browser.$1')
				) {
					return browser__output__relative_path
				}
			}
		}), { ns: 'middleware', id: 'browser__output__relative_path' })
export const [
	browser__script$_,
	browser__script_,
] = be_memo_pair_(ctx=>
	nullish__none_([browser__output__relative_path_(ctx), browser__relative_path_(ctx)],
		(browser__output__relative_path, browser__relative_path)=>
			join('/', relative(browser__relative_path, browser__output__relative_path))),
{ ns: 'middleware', id: 'browser__script' })
