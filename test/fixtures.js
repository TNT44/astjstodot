exports.fruits = [
  '<ul id="fruits">',
  '<li class="apple">Apple</li>',
  '<li class="orange">Orange</li>',
  '<li class="pear">Pear</li>',
  '</ul>'
].join('');

exports.attr = {
  "type": "attr",
  "id": "rankdir",
  "eq": "LR"
};

exports.attrstmt = {
  "type": "attr_stmt",
  "target": "graph",
  "attr_list": [{
    "type": "attr",
    "id": "rankdir",
    "eq": "LR"
  }]
};

exports.simple = {
  "type": "digraph",
  "children": [{
      "type": "node_stmt",
      "node_id": {
        "type": "node_id",
        "id": "a"
      },
      "attr_list": [{
          "type": "attr",
          "id": "shape",
          "eq": "ellipse"
        },
        {
          "type": "attr",
          "id": "style",
          "eq": "filled"
        },
        {
          "type": "attr",
          "id": "fillcolor",
          "eq": "#1f77b4"
        }
      ]
    },
    {
      "type": "node_stmt",
      "node_id": {
        "type": "node_id",
        "id": "b"
      },
      "attr_list": [{
          "type": "attr",
          "id": "shape",
          "eq": "polygon"
        },
        {
          "type": "attr",
          "id": "style",
          "eq": "filled"
        },
        {
          "type": "attr",
          "id": "fillcolor",
          "eq": "#ff7f0e"
        }
      ]
    },
    {
      "type": "node_stmt",
      "node_id": {
        "type": "node_id",
        "id": "c"
      },
      "attr_list": [{
          "type": "attr",
          "id": "shape",
          "eq": "polygon"
        },
        {
          "type": "attr",
          "id": "style",
          "eq": "filled"
        },
        {
          "type": "attr",
          "id": "fillcolor",
          "eq": "#ff7f0e"
        }
      ]
    },
    {
      "type": "node_stmt",
      "node_id": {
        "type": "node_id",
        "id": "d"
      },
      "attr_list": [{
          "type": "attr",
          "id": "shape",
          "eq": "ellipse"
        },
        {
          "type": "attr",
          "id": "style",
          "eq": "filled"
        },
        {
          "type": "attr",
          "id": "fillcolor",
          "eq": "#ff7f0e"
        }
      ]
    },
    {
      "type": "node_stmt",
      "node_id": {
        "type": "node_id",
        "id": "e"
      },
      "attr_list": [{
          "type": "attr",
          "id": "shape",
          "eq": "polygon"
        },
        {
          "type": "attr",
          "id": "style",
          "eq": "filled"
        },
        {
          "type": "attr",
          "id": "fillcolor",
          "eq": "#ff7f0e"
        }
      ]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "a"
        },
        {
          "type": "node_id",
          "id": "b"
        }
      ],
      "attr_list": [{
          "type": "attr",
          "id": "fillcolor",
          "eq": "#a6cee3"
        },
        {
          "type": "attr",
          "id": "color",
          "eq": "#1f78b4"
        }
      ]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "a"
        },
        {
          "type": "node_id",
          "id": "c"
        }
      ],
      "attr_list": [{
          "type": "attr",
          "id": "fillcolor",
          "eq": "#a6cee3"
        },
        {
          "type": "attr",
          "id": "color",
          "eq": "#1f78b4"
        }
      ]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "c"
        },
        {
          "type": "node_id",
          "id": "d"
        }
      ],
      "attr_list": [{
          "type": "attr",
          "id": "fillcolor",
          "eq": "#a6cee3"
        },
        {
          "type": "attr",
          "id": "color",
          "eq": "#1f78b4"
        }
      ]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "d"
        },
        {
          "type": "node_id",
          "id": "e"
        }
      ],
      "attr_list": [{
          "type": "attr",
          "id": "fillcolor",
          "eq": "#a6cee3"
        },
        {
          "type": "attr",
          "id": "color",
          "eq": "#1f78b4"
        }
      ]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "b"
        },
        {
          "type": "node_id",
          "id": "e"
        }
      ],
      "attr_list": [{
          "type": "attr",
          "id": "fillcolor",
          "eq": "#a6cee3"
        },
        {
          "type": "attr",
          "id": "color",
          "eq": "#1f78b4"
        }
      ]
    }
  ],
  "strict": true
};

exports.edgestmt = {
  "type": "edge_stmt",
  "edge_list": [{
      "type": "node_id",
      "id": "MATH 100"
    },
    {
      "type": "node_id",
      "id": "MATH 101"
    }
  ],
  "attr_list": [{
    "type": "attr",
    "id": "pos",
    "eq": "e,237,215.25 126.4,180.87 155.89,190.04 195.69,202.41 227.11,212.18"
  }]
};

exports.full = [{
  "type": "digraph",
  "children": [{
      "type": "attr_stmt",
      "target": "graph",
      "attr_list": [{
        "type": "attr",
        "id": "rankdir",
        "eq": "LR"
      }]
    },
    {
      "type": "attr_stmt",
      "target": "node",
      "attr_list": [{
        "type": "attr",
        "id": "label",
        "eq": "\\N"
      }]
    },
    {
      "type": "attr_stmt",
      "target": "graph",
      "attr_list": [{
          "type": "attr",
          "id": "label",
          "eq": {
            "type": "id",
            "value": "<font point-size=\"30\">Unknown</font>",
            "html": true
          }
        },
        {
          "type": "attr",
          "id": "labelloc",
          "eq": "t"
        },
        {
          "type": "attr",
          "id": "lp",
          "eq": "501,314.5"
        },
        {
          "type": "attr",
          "id": "bb",
          "eq": "0,0,1002,334"
        }
      ]
    },
    {
      "type": "subgraph",
      "id": "year1",
      "children": [{
          "type": "attr_stmt",
          "target": "graph",
          "attr_list": [{
              "type": "attr",
              "id": "label",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "labelloc",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "lp",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "bb",
              "eq": ""
            }
          ]
        },
        {
          "type": "attr_stmt",
          "target": "node",
          "attr_list": [{
              "type": "attr",
              "id": "style",
              "eq": "rounded"
            },
            {
              "type": "attr",
              "id": "shape",
              "eq": "box"
            }
          ]
        },
        {
          "type": "subgraph",
          "children": [{
              "type": "attr_stmt",
              "target": "graph",
              "attr_list": [{
                "type": "attr",
                "id": "rank",
                "eq": "same"
              }]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 100"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 100</font><br/><font color=\"blue\">Calculus:I</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "85,168"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "1.1389"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "ECON 103"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">ECON 103</font><br/><font color=\"blue\">Principles Microeconomics</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "85,81"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "2.3333"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "ECON 104"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">ECON 104</font><br/><font color=\"blue\">Principles Macroeconomics</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "85,21"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "2.3611"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            }
          ]
        },
        {
          "type": "subgraph",
          "children": [{
              "type": "attr_stmt",
              "target": "graph",
              "attr_list": [{
                "type": "attr",
                "id": "rank",
                "eq": "same"
              }]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 101"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 101</font><br/><font color=\"blue\">Calculus:II</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "278,228"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "1.1389"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 122"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 122</font><br/><font color=\"blue\">Logic and Foundations</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "278,168"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "1.9722"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "subgraph",
      "id": "year2",
      "children": [{
          "type": "attr_stmt",
          "target": "graph",
          "attr_list": [{
              "type": "attr",
              "id": "label",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "labelloc",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "lp",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "bb",
              "eq": ""
            }
          ]
        },
        {
          "type": "attr_stmt",
          "target": "node",
          "attr_list": [{
              "type": "attr",
              "id": "style",
              "eq": "rounded"
            },
            {
              "type": "attr",
              "id": "shape",
              "eq": "box"
            }
          ]
        },
        {
          "type": "subgraph",
          "children": [{
              "type": "attr_stmt",
              "target": "graph",
              "attr_list": [{
                "type": "attr",
                "id": "rank",
                "eq": "same"
              }]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "clust48554336"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "Electives (At least 1.5 units)",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "style",
                  "eq": "rounded,filled"
                },
                {
                  "type": "attr",
                  "id": "color",
                  "eq": "invis"
                },
                {
                  "type": "attr",
                  "id": "fillcolor",
                  "eq": "gray"
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "485,24"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "2.3889"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.5"
                }
              ]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 205"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 205</font><br/><font color=\"blue\">Multivariable Calculus</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "485,274"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "1.9722"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 208"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 208</font><br/><font color=\"blue\">Math: Economics+Econometrics</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "485,81"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "2.75"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 212"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 212</font><br/><font color=\"blue\">Introduction to Algebra</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "485,154"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "2.0278"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 236"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 236</font><br/><font color=\"blue\">Introduction to Real Analysis</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "485,214"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "2.4722"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "subgraph",
      "id": "year3",
      "children": [{
          "type": "attr_stmt",
          "target": "graph",
          "attr_list": [{
              "type": "attr",
              "id": "label",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "labelloc",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "lp",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "bb",
              "eq": ""
            }
          ]
        },
        {
          "type": "attr_stmt",
          "target": "node",
          "attr_list": [{
              "type": "attr",
              "id": "style",
              "eq": "rounded"
            },
            {
              "type": "attr",
              "id": "shape",
              "eq": "box"
            }
          ]
        },
        {
          "type": "subgraph",
          "children": [{
              "type": "attr_stmt",
              "target": "graph",
              "attr_list": [{
                "type": "attr",
                "id": "rank",
                "eq": "same"
              }]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "clust73678445"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "Electives dog (At least 1.5 units)",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "style",
                  "eq": "rounded,filled"
                },
                {
                  "type": "attr",
                  "id": "color",
                  "eq": "invis"
                },
                {
                  "type": "attr",
                  "id": "fillcolor",
                  "eq": "gray"
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "719,97"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "2.7222"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.5"
                }
              ]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 312"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 312</font><br/><font color=\"blue\">Abstract Algebra: I</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "719,154"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "1.6944"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 365"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 365</font><br/><font color=\"blue\">Introduction to Topology</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "719,214"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "2.1389"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "subgraph",
      "id": "year4",
      "children": [{
          "type": "attr_stmt",
          "target": "graph",
          "attr_list": [{
              "type": "attr",
              "id": "label",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "labelloc",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "lp",
              "eq": ""
            },
            {
              "type": "attr",
              "id": "bb",
              "eq": ""
            }
          ]
        },
        {
          "type": "attr_stmt",
          "target": "node",
          "attr_list": [{
              "type": "attr",
              "id": "style",
              "eq": "rounded"
            },
            {
              "type": "attr",
              "id": "shape",
              "eq": "box"
            }
          ]
        },
        {
          "type": "subgraph",
          "children": [{
              "type": "attr_stmt",
              "target": "graph",
              "attr_list": [{
                "type": "attr",
                "id": "rank",
                "eq": "same"
              }]
            },
            {
              "type": "node_stmt",
              "node_id": {
                "type": "node_id",
                "id": "MATH 415"
              },
              "attr_list": [{
                  "type": "attr",
                  "id": "label",
                  "eq": {
                    "type": "id",
                    "value": "<font color=\"red\">MATH 415</font><br/><font color=\"blue\">History of Mathematics</font>",
                    "html": true
                  }
                },
                {
                  "type": "attr",
                  "id": "pos",
                  "eq": "928,154"
                },
                {
                  "type": "attr",
                  "id": "width",
                  "eq": "2.0556"
                },
                {
                  "type": "attr",
                  "id": "height",
                  "eq": "0.58333"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 100"
        },
        {
          "type": "node_id",
          "id": "MATH 101"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,237,215.25 126.4,180.87 155.89,190.04 195.69,202.41 227.11,212.18"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 100"
        },
        {
          "type": "node_id",
          "id": "MATH 122"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,206.27,168 126.4,168 146.76,168 172.03,168 196.06,168"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 101"
        },
        {
          "type": "node_id",
          "id": "MATH 205"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,413.5,258.11 319.39,237.2 343.46,242.55 374.63,249.47 403.42,255.87"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 100"
        },
        {
          "type": "node_id",
          "id": "MATH 208"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,385.68,100.25 126.06,157.37 149.44,151.43 179.3,144.04 206,138 261.83,125.38 324.24,112.52 375.84,102.21"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "ECON 103"
        },
        {
          "type": "node_id",
          "id": "MATH 208"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,385.95,81 169.34,81 229.39,81 310.63,81 375.66,81"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "ECON 104"
        },
        {
          "type": "node_id",
          "id": "MATH 208"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,385.7,66.105 170.32,33.798 230.21,42.782 310.83,54.874 375.47,64.571"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 122"
        },
        {
          "type": "node_id",
          "id": "MATH 212"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,411.71,158.96 349.53,163.16 366.33,162.03 384.38,160.81 401.65,159.64"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 101"
        },
        {
          "type": "node_id",
          "id": "MATH 236"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,395.77,220.03 319.39,225.2 338.59,223.9 362.32,222.3 385.76,220.71"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 122"
        },
        {
          "type": "node_id",
          "id": "MATH 236"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,395.94,194.21 349.53,183.9 361.33,186.52 373.75,189.28 386.08,192.02"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 212"
        },
        {
          "type": "node_id",
          "id": "MATH 312"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,657.49,154 558.08,154 586.5,154 618.97,154 647.27,154"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 236"
        },
        {
          "type": "node_id",
          "id": "MATH 365"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,641.21,214 574.13,214 592.77,214 612.4,214 631,214"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 212"
        },
        {
          "type": "node_id",
          "id": "MATH 365"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,641.21,194.05 558.08,172.74 581.29,178.69 607.21,185.34 631.35,191.53"
      }]
    },
    {
      "type": "edge_stmt",
      "edge_list": [{
          "type": "node_id",
          "id": "MATH 312"
        },
        {
          "type": "node_id",
          "id": "MATH 415"
        }
      ],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,853.94,154 780.58,154 800.34,154 822.58,154 843.69,154"
      }]
    }
  ],
  "id": "pruned"
}];


exports.proper = {
  "type": "attr",
  "id": "pos",
  "eq": "85,81"
};