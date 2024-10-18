/* tslint:disable */
/* eslint-disable */
/**
 * @param {any} data
 * @returns {any}
 */
export function voleith_gen_proof(data: any): any;
/**
 * @param {any} data
 * @param {any} proof
 * @returns {boolean}
 */
export function voleith_verify_proof(data: any, proof: any): boolean;
export class ZKReceiver {
  free(): void;
  /**
   * @param {number} iknp_count
   * @param {number} mpf_height
   * @param {number} mpf_round
   */
  constructor(iknp_count: number, mpf_height: number, mpf_round: number);
  /**
   * @returns {any}
   */
  get_pool_size(): any;
  /**
   * @param {any} data
   */
  setup_iknp_receiver(data: any): void;
  /**
   * @returns {any}
   */
  get_iknp_receiver_pubs(): any;
  /**
   * @param {any} data
   */
  decrypt_iknp_receiver(data: any): void;
  /**
   * @param {number} iknp_count
   * @param {number} mpf_height
   * @param {number} mpf_round
   */
  silent_receiver_init(iknp_count: number, mpf_height: number, mpf_round: number): void;
  /**
   * @param {any} data
   * @returns {any}
   */
  encrypt_silent_receiver_mpf(data: any): any;
  /**
   * @param {any} data
   * @returns {any}
   */
  verifier_evaluate(data: any): any;
  /**
   * @param {any} data
   * @returns {any}
   */
  verifier_waterfall_evaluate(data: any): any;
}
export class ZKSender {
  free(): void;
  /**
   * @param {number} iknp_count
   * @param {number} mpf_height
   * @param {number} mpf_round
   */
  constructor(iknp_count: number, mpf_height: number, mpf_round: number);
  /**
   * @returns {any}
   */
  get_pool_size(): any;
  /**
   * @returns {any}
   */
  get_iknp_sender_pubs(): any;
  /**
   * @param {any} data
   */
  setup_iknp_sender(data: any): void;
  /**
   * @returns {any}
   */
  encrypt_iknp_sender(): any;
  /**
   * @param {number} iknp_count
   * @param {number} mpf_height
   * @param {number} mpf_round
   */
  silent_sender_init(iknp_count: number, mpf_height: number, mpf_round: number): void;
  /**
   * @returns {any}
   */
  get_silent_sender_mpf_d(): any;
  /**
   * @param {any} data
   */
  decrypt_silent_sender_mpf(data: any): void;
  /**
   * @param {any} data
   * @returns {any}
   */
  prover_evaluate(data: any): any;
  /**
   * @param {any} data
   * @returns {any}
   */
  prover_waterfall_evaluate(data: any): any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_zksender_free: (a: number, b: number) => void;
  readonly zksender_new: (a: number, b: number, c: number) => Array;
  readonly zksender_get_pool_size: (a: number) => number;
  readonly zksender_get_iknp_sender_pubs: (a: number) => number;
  readonly zksender_setup_iknp_sender: (a: number, b: number) => void;
  readonly zksender_encrypt_iknp_sender: (a: number) => number;
  readonly zksender_silent_sender_init: (a: number, b: number, c: number, d: number) => void;
  readonly zksender_get_silent_sender_mpf_d: (a: number) => number;
  readonly zksender_decrypt_silent_sender_mpf: (a: number, b: number) => void;
  readonly zksender_prover_evaluate: (a: number, b: number) => number;
  readonly zksender_prover_waterfall_evaluate: (a: number, b: number) => number;
  readonly __wbg_zkreceiver_free: (a: number, b: number) => void;
  readonly zkreceiver_new: (a: number, b: number, c: number) => Array;
  readonly zkreceiver_get_pool_size: (a: number) => number;
  readonly zkreceiver_setup_iknp_receiver: (a: number, b: number) => void;
  readonly zkreceiver_get_iknp_receiver_pubs: (a: number) => number;
  readonly zkreceiver_decrypt_iknp_receiver: (a: number, b: number) => void;
  readonly zkreceiver_silent_receiver_init: (a: number, b: number, c: number, d: number) => void;
  readonly zkreceiver_encrypt_silent_receiver_mpf: (a: number, b: number) => number;
  readonly zkreceiver_verifier_evaluate: (a: number, b: number) => number;
  readonly zkreceiver_verifier_waterfall_evaluate: (a: number, b: number) => number;
  readonly voleith_gen_proof: (a: number) => number;
  readonly voleith_verify_proof: (a: number, b: number) => number;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
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
