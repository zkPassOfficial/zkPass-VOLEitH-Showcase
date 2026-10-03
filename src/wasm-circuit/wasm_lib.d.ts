/* tslint:disable */
/* eslint-disable */

/**
 * Prove a waterfall circuit.
 *
 * `input` is Borsh(`WasmWaterfallInput`) from the extension's `genProofInputs`. Returns the proof
 * bytes.
 */
export function voleithGenProof(input: any): any;

/**
 * The byte layout of a proof as Borsh(`Vec<ProofSection>`) in layout order, for drawing it; the
 * sizes sum to the proof's length. Nothing is verified. `proof` is the output of
 * `voleithGenProof`.
 */
export function voleithProofSections(proof: any): any;

/**
 * Verify a waterfall proof and return the output bits it commits to, as Borsh(`Vec<NodeOutput>`)
 * sorted by node id. Errors on malformed input and on a proof that does not verify (`proof
 * rejected: <check>`), so a returned value is always a verified statement; the caller still
 * decides what those bits must be.
 *
 * `waterfall` is Borsh(`WaterfallSpec`) from the extension's `genVerifyInputs`, `proof` the output
 * of `voleithGenProof`.
 */
export function voleithVerifyProofOutputs(waterfall: any, proof: any): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly voleithGenProof: (a: any) => [number, number, number];
    readonly voleithProofSections: (a: any) => [number, number, number];
    readonly voleithVerifyProofOutputs: (a: any, b: any) => [number, number, number];
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
