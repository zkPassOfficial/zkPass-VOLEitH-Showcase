export const Dependency = {
  struct: {
    id: 'i64',
    k_start: 'u64',
    v_start: 'u64',
    size: 'u64',
  },
}

export const Dag = {
  struct: {
    id: 'u64',
    name: 'string',
    out: 'bool',
    deps: {
      array: {
        type: Dependency,
      },
    },
  },
}

export const BaseCircuit = {
  struct: {
    name: 'string',
    data: 'string',
  },
}

export const Waterfall = {
  struct: {
    circuits: {
      array: {
        type: BaseCircuit,
      },
    },
    dags: {
      array: {
        type: Dag,
      },
    },
  },
}

export const WaterfallInput = {
  struct: {
    seed: 'u128',
    inputs: {
      array: {
        type: 'bool',
      },
    },
    waterfall: Waterfall,
  },
}

export const ProverCommit = {
  struct: {
    w: 'bool',
    m: 'u128',
  },
}

export const WaterfallOutput = {
  struct: {
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
    sum: 'u128',
    out_commits: {
      map: {
        key: 'u64',
        value: {
          array: {
            type: {
              array: {
                type: ProverCommit,
              },
            },
          },
        },
      },
    },
  },
}

export const EvaluateOutput = {
  struct: {
    d: {
      array: {
        type: 'bool',
      },
    },
    u: 'u128',
    v: 'u128',
    commits: {
      array: {
        type: {
          array: {
            type: ProverCommit,
          },
        },
      },
    },
  },
}

export const VOLEitHWaterfallProof = {
  struct: {
    k: 'u64',
    fiat_shamir_r: 'u128',
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
    hash_u: {
      array: {
        type: 'u128',
      },
    },
    hash_v: {
      array: {
        type: 'u128',
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
      map: {
        key: 'u64',
        value: {
          array: {
            type: {
              array: {
                type: ProverCommit,
              },
            },
          },
        },
      },
    },
  },
}
