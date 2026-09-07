/* tslint:disable */
/* eslint-disable */

/**
 * Prove a waterfall circuit.
 *
 * `data` is Borsh(`WaterfallInput`) from Showcase `genProofInputs`.
 * Returns Borsh(`VOLEitHWaterfallProof`) bytes.
 */
export function voleith_gen_proof(data: any): any;

/**
 * Verify a waterfall proof.
 *
 * `data` is Borsh(`Waterfall`) from Showcase `genVerifyInputs`.
 * `proof` is Borsh(`VOLEitHWaterfallProof`) bytes from `voleith_gen_proof`.
 *
 * Public outputs are extracted from the proof's committed output bits.
 * In production, the verifier should supply expected outputs independently.
 */
export function voleith_verify_proof(data: any, proof: any): boolean;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly voleith_gen_proof: (a: any) => [number, number, number];
    readonly voleith_verify_proof: (a: any, b: any) => [number, number, number];
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
