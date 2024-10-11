export const VOLEitHWaterfallProofSchema = {
  struct: {
    k: 'u64',
    choose_keys: {
      array: {
        type: {
          array: {
            type: 'u128',
          },
        },
      },
    },
    choose_commits: {
      array: {
        type: {
          array: {
            type: 'u128',
            len: 2,
          },
        },
      },
    },
    hash: {
      array: {
        type: 'u128',
        len: 2,
      },
    },
    corrections: {
      array: {
        type: {
          array: {
            type: 'u128',
          },
        },
      },
    },
    pk: {
      array: {
        type: 'u8',
        len: 32,
      },
    },
    fiat_shamir_r: {
      array: {
        type: 'u8',
        len: 32,
      },
    },
    fiat_shamir_z: {
      array: {
        type: 'u8',
        len: 32,
      },
    },
    d: {
      array: {
        type: {
          array: {
            type: 'bool',
          },
        },
      },
    },
    u: {
      array: {
        type: 'u128',
      },
    },
    v: {
      array: {
        type: 'u128',
      },
    },
    outputs: {
      array: {
        type: {
          array: {
            type: 'bool',
          },
        },
      },
    },
  },
}
