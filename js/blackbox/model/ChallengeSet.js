// Copyright 2016, University of Colorado Boulder
// TODO: Review, document, annotate, i18n, bring up to standards

/**
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitBlackBoxStudy = require( 'CIRCUIT_CONSTRUCTION_KIT_BLACK_BOX_STUDY/circuitConstructionKitBlackBoxStudy' );

  var resistivity = 1E-4;
  var warmupCircuitStateObject = {
    wires: [
      {
        resistivity: resistivity,
        startVertex: 0,
        endVertex: 2
      },
      {
        resistivity: resistivity,
        startVertex: 3,
        endVertex: 1
      }
    ],
    batteries: [],
    lightBulbs: [],
    resistors: [
      {
        resistance: 10,
        startVertex: 2,
        endVertex: 3
      }
    ],
    switches: [],
    vertices: [
      {
        x: 381,
        y: 305
      },
      {
        x: 641,
        y: 305
      },
      {
        x: 451.31111111111113,
        y: 304.3777777777778,
        options: {
          attachable: false
        }
      },
      {
        x: 561.3111111111111,
        y: 304.3777777777778,
        options: {
          attachable: false
        }
      }
    ]
  };
  var challengeArray = [
    {
      wires: [
        {
          resistivity: resistivity,
          startVertex: 0,
          endVertex: 2
        },
        {
          resistivity: resistivity,
          startVertex: 3,
          endVertex: 1
        }
      ],
      batteries: [
        {
          voltage: 10,
          startVertex: 3,
          endVertex: 2
        }
      ],
      lightBulbs: [],
      resistors: [],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        },
        {
          x: 463.3925925925927,
          y: 305,
          options: {
            attachable: false
          }
        },
        {
          x: 565.3925925925927,
          y: 305,
          options: {
            attachable: false
          }
        }
      ]
    },

    {
      wires: [ {
        resistivity: resistivity,
        startVertex: 0,
        endVertex: 1,
        options: {
          interactive: false
        }
      } ],
      batteries: [],
      lightBulbs: [],
      resistors: [],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        }
      ]
    },

    {
      wires: [
        {
          resistivity: resistivity,
          startVertex: 2,
          endVertex: 3
        },
        {
          resistivity: resistivity,
          startVertex: 4,
          endVertex: 1
        },
        {
          resistivity: resistivity,
          startVertex: 0,
          endVertex: 5
        }
      ],
      batteries: [],
      lightBulbs: [],
      resistors: [
        {
          resistance: 10,
          startVertex: 3,
          endVertex: 4
        }
      ],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        },
        {
          x: 508.6893353941268,
          y: 178.18907779495106
        },
        {
          x: 494.73089897821814,
          y: 243.01287667140764,
          options: {
            attachable: false
          }
        },
        {
          x: 575.7047913446678,
          y: 317.4657393096343,
          options: {
            attachable: false
          }
        },
        {
          x: 474.16074188562595,
          y: 304.80422462648113,
          options: {
            attachable: false
          }
        }
      ]
    },
    {
      wires: [
        {
          resistivity: resistivity,
          startVertex: 2,
          endVertex: 3
        },
        {
          resistivity: resistivity,
          startVertex: 4,
          endVertex: 1
        },
        {
          resistivity: resistivity,
          startVertex: 0,
          endVertex: 5
        },
        {
          resistivity: resistivity,
          startVertex: 5,
          endVertex: 4
        }
      ],
      batteries: [],
      lightBulbs: [],
      resistors: [
        {
          resistance: 10,
          startVertex: 3,
          endVertex: 4
        }
      ],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        },
        {
          x: 508.6893353941268,
          y: 178.18907779495106
        },
        {
          x: 494.73089897821814,
          y: 243.01287667140764,
          options: {
            attachable: false
          }
        },
        {
          x: 575.7047913446678,
          y: 317.4657393096343,
          options: {
            attachable: false
          }
        },
        {
          x: 474.16074188562595,
          y: 304.80422462648113,
          options: {
            attachable: false
          }
        }
      ]
    },

    {
      wires: [
        {
          resistivity: resistivity,
          startVertex: 2,
          endVertex: 3
        },
        {
          resistivity: resistivity,
          startVertex: 0,
          endVertex: 4
        },
        {
          resistivity: resistivity,
          startVertex: 5,
          endVertex: 1
        }
      ],
      batteries: [],
      lightBulbs: [],
      resistors: [
        {
          resistance: 10,
          startVertex: 3,
          endVertex: 5
        },
        {
          resistance: 15,
          startVertex: 4,
          endVertex: 5
        }
      ],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        },
        {
          x: 508.6893353941268,
          y: 178.18907779495106
        },
        {
          x: 466.7932305597578,
          y: 246.6736324433821,
          options: {
            attachable: false
          }
        },
        {
          x: 436.2563281508843,
          y: 315.1157323880298,
          options: {
            attachable: false
          }
        },
        {
          x: 545.9709724238027,
          y: 323.0338655055636,
          options: {
            attachable: false
          }
        }
      ]
    },

    {
      wires: [
        {
          resistivity: resistivity,
          startVertex: 0,
          endVertex: 5
        },
        {
          resistivity: resistivity,
          startVertex: 3,
          endVertex: 2
        },
        {
          resistivity: resistivity,
          startVertex: 4,
          endVertex: 1
        },
        {
          resistivity: resistivity,
          startVertex: 6,
          endVertex: 7
        }
      ],
      batteries: [],
      lightBulbs: [],
      resistors: [
        {
          resistance: 10,
          startVertex: 3,
          endVertex: 4
        },
        {
          resistance: 25,
          startVertex: 5,
          endVertex: 6
        }
      ],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        },
        {
          x: 508.6893353941268,
          y: 178.18907779495106
        },
        {
          x: 491.92597968069657,
          y: 250.20948234155776,
          options: {
            attachable: false
          }
        },
        {
          x: 580.837550793385,
          y: 314.9762371025718,
          options: {
            attachable: false
          }
        },
        {
          x: 448.30478955007254,
          y: 306.68553459119494,
          options: {
            attachable: false
          }
        },
        {
          x: 534.2197071006653,
          y: 375.37779719969285,
          options: {
            attachable: false
          }
        },
        {
          x: 516.6705370101597,
          y: 435.9859700048379
        }
      ]
    },

    {
      wires: [
        {
          resistivity: resistivity,
          startVertex: 0,
          endVertex: 6
        },
        {
          resistivity: resistivity,
          startVertex: 5,
          endVertex: 2
        },
        {
          resistivity: resistivity,
          startVertex: 3,
          endVertex: 1
        },
        {
          resistivity: resistivity,
          startVertex: 5,
          endVertex: 4
        },
        {
          resistivity: resistivity,
          startVertex: 6,
          endVertex: 5
        }
      ],
      batteries: [],
      lightBulbs: [],
      resistors: [
        {
          resistance: 40,
          startVertex: 5,
          endVertex: 3
        }
      ],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        },
        {
          x: 508.6893353941268,
          y: 178.18907779495106
        },
        {
          x: 598.67209360906,
          y: 310.5176013986531,
          options: {
            attachable: false
          }
        },
        {
          x: 516.6705370101597,
          y: 435.9859700048379
        },
        {
          x: 509.7605224963715,
          y: 245.75084663763903,
          options: {
            attachable: false
          }
        },
        {
          x: 448.30478955007254,
          y: 306.68553459119494,
          options: {
            attachable: false
          }
        }
      ]
    },

    {
      wires: [
        {
          resistivity: resistivity,
          startVertex: 0,
          endVertex: 4
        },
        {
          resistivity: resistivity,
          startVertex: 5,
          endVertex: 2
        },
        {
          resistivity: resistivity,
          startVertex: 7,
          endVertex: 1
        },
        {
          resistivity: resistivity,
          startVertex: 6,
          endVertex: 3
        },
        {
          resistivity: resistivity,
          startVertex: 6,
          endVertex: 7
        }
      ],
      batteries: [],
      lightBulbs: [],
      resistors: [
        {
          resistance: 15,
          startVertex: 5,
          endVertex: 7
        },
        {
          resistance: 10,
          startVertex: 4,
          endVertex: 5
        }
      ],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        },
        {
          x: 508.6893353941268,
          y: 178.18907779495106
        },
        {
          x: 509.23947750362845,
          y: 437.4721819061441
        },
        {
          x: 429.7844303895079,
          y: 301.9537616627625,
          options: {
            attachable: false
          }
        },
        {
          x: 509.76052249637144,
          y: 226.43009192065796,
          options: {
            attachable: false
          }
        },
        {
          x: 511.2467343976777,
          y: 312.6303821964199,
          options: {
            attachable: false
          }
        },
        {
          x: 598.6720936090605,
          y: 291.196846681672,
          options: {
            attachable: false
          }
        }
      ]
    },

    {
      wires: [
        {
          resistivity: resistivity,
          startVertex: 0,
          endVertex: 5
        },
        {
          resistivity: resistivity,
          startVertex: 4,
          endVertex: 2
        },
        {
          resistivity: resistivity,
          startVertex: 7,
          endVertex: 1
        },
        {
          resistivity: resistivity,
          startVertex: 6,
          endVertex: 3
        }
      ],
      batteries: [
        {
          voltage: 10,
          startVertex: 4,
          endVertex: 5
        }
      ],
      lightBulbs: [],
      resistors: [
        {
          resistance: 40,
          startVertex: 4,
          endVertex: 7
        }
      ],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        },
        {
          x: 508.6893353941268,
          y: 178.18907779495106
        },
        {
          x: 509.23947750362845,
          y: 437.4721819061441
        },
        {
          x: 509.76052249637144,
          y: 226.43009192065796,
          options: {
            attachable: false
          }
        },
        {
          x: 429.54911989720756,
          y: 289.4390666232742,
          options: {
            attachable: false
          }
        },
        {
          x: 511.2467343976777,
          y: 312.6303821964199,
          options: {
            attachable: false
          }
        },
        {
          x: 598.6720936090605,
          y: 291.196846681672,
          options: {
            attachable: false
          }
        }
      ]
    },

    {
      wires: [
        {
          resistivity: resistivity,
          startVertex: 0,
          endVertex: 4
        },
        {
          resistivity: resistivity,
          startVertex: 5,
          endVertex: 2
        },
        {
          resistivity: resistivity,
          startVertex: 7,
          endVertex: 1
        },
        {
          resistivity: resistivity,
          startVertex: 6,
          endVertex: 3
        },
        {
          resistivity: resistivity,
          startVertex: 7,
          endVertex: 8
        }
      ],
      batteries: [],
      lightBulbs: [],
      resistors: [
        {
          resistance: 5,
          startVertex: 4,
          endVertex: 5
        },
        {
          resistance: 5,
          startVertex: 4,
          endVertex: 6
        },
        {
          resistance: 10,
          startVertex: 5,
          endVertex: 7
        },
        {
          resistance: 10,
          startVertex: 6,
          endVertex: 8
        }
      ],
      switches: [],
      vertices: [
        {
          x: 381,
          y: 305
        },
        {
          x: 641,
          y: 305
        },
        {
          x: 508.6893353941268,
          y: 178.18907779495106
        },
        {
          x: 509.23947750362845,
          y: 437.4721819061441
        },
        {
          x: 429.47373111984234,
          y: 306.0820194162099,
          options: {
            attachable: false
          }
        },
        {
          x: 509.76052249637144,
          y: 230.8887276245767,
          options: {
            attachable: false
          }
        },
        {
          x: 515.2404740840386,
          y: 374.95919852013003,
          options: {
            attachable: false
          }
        },
        {
          x: 592.4940785388161,
          y: 303.38120105852477,
          options: {
            attachable: false
          }
        },
        {
          x: 608.3992218798088,
          y: 316.46605610903987,
          options: {
            attachable: false
          }
        }
      ]
    }
  ];

  var ChallengeSet = {
    warmupCircuitStateObject: warmupCircuitStateObject,
    challengeArray: challengeArray
  };

  circuitConstructionKitBlackBoxStudy.register( 'ChallengeSet', ChallengeSet );

  return ChallengeSet;
} );