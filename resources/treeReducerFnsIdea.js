const state = {
  t: 'R',
  c: [
    {
      t: 'V',
      c: [
        {
          t: 'T',
          c: ['Hey'],
        },
        {
          t: 'V',
          c: [],
        },
      ],
    },
    {
      t: 'V',
      c: [],
    },
  ],
};

const parentElementPath = [0,1];
const element = { t: 'U', c: [] };
const branchSequence = [
  {
    t: 'R',
    c: [
      {
        t: 'V',
        c: [
          {
            t: 'T',
            c: ['Hey'],
          },
          {
            t: 'V',
            c: [],
          },
        ],
      },
      {
        t: 'V',
        c: [],
      },
    ],
  },
  {
    t: 'V',
    c: [
      {
        t: 'T',
        c: ['Hey'],
      },
      {
        t: 'V',
        c: [],
      },
    ],
  },
  {
    t: 'V',
    c: [],
  },
];
branchSequence.reduceRight((newState, branchElement, index) => {
  const reverseParentElementPath = parentElementPath.reverse();

  if (index === 0) {
    return {
      ...branchElement,
      c: [
        ...branchElement.c,
        element,
      ],
    };
  }


}, {});
