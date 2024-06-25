const getIkeys = (arrayOrObject: any): any[] => {
  // The immediate candidates we can check within the searchSpace may be answers
  // or may be KEYS that let us access further candidates.
  // Let's handle these keys consistently in an array. If we're dealing with the
  // "keys" of an array, they will index values (numbers). That's fine.

  let ikeys: any[] = [];

  if (Array.isArray(arrayOrObject)) {
    for (let i = 0; i < arrayOrObject.length; i++) {
      ikeys.push(i);
    }
  } else if (typeof arrayOrObject === "object") {
    ikeys = ikeys.concat(Object.keys(arrayOrObject));
  }

  return ikeys;
};

const depthFirstSearch = (searchSpace: any, target: string): any[] => {
  // This returns a set of keys/index values for nested objects/arrays

  let keys = getIkeys(searchSpace);

  if (keys.length > 0) {
    // We run through the keys and for each one, we first check
    // if it unlocks access to the answer. If it does, we pass
    // the answer back!
    for (let i = 0; i < keys.length; i++) {
      const ikey = keys[i];
      if (ikey === target) {
        return [ikey];
      }
      if (searchSpace[ikey] === target) {
        return [ikey, target];
      }

      // If it doesn't, we jump straight into this same query on
      // the item that this key unlocks access to.
      const answerSoFar = depthFirstSearch(searchSpace[ikey], target);

      // If we get a hit, it will be passed up the recursive chain
      // with a non-zero "answerSoFar".
      if (answerSoFar.length > 0) {
        return [ikey].concat(answerSoFar);
      }

      // If we're not egetting hits, we eventually end up back at
      // the original top level. We have plumbed the depts of a single
      // possibility here.
    }
  }

  // If we end up down here, the target was NOT found
  return [];
};

const useIkeys = (searchSpace: any, ikeys: any[]): any => {
  let current = searchSpace;
  for (const ikey of ikeys) {
    current = current[ikey];
  }
  return current;
};

const breadthFirstSearch = (searchSpace: any, target: string): any[] => {
  let ikeys = getIkeys(searchSpace);

  const checkingQueue: any[][] = [];

  // Let's start simple with a populated queue
  for (let i = 0; i < ikeys.length; i++) {
    const ikey = ikeys[i];
    checkingQueue.push([ikey]);
  }

  // Now let's go through the ikeys in that queue
  // and use each of them to check on a value in
  // in the searchSpace object.
  for (let i = 0; i < checkingQueue.length; i++) {
    console.log("For Loop running for the " + i + "th time");

    // "ikeys" here is the path we're checking
    // it might look like ["name", "cat", 56, "Jimmy15"]
    const ikeys = checkingQueue[i];
    const lastIkey = ikeys[ikeys.length - 1];
    if (lastIkey === target) {
      return ikeys;
    }

    const valueToTest = useIkeys(searchSpace, ikeys);

    if (valueToTest === target) {
      ikeys.push(target);
      return ikeys;
    } else {
      const moreIkeys = getIkeys(valueToTest);
      for (const newIkey of moreIkeys) {
        const newIkeys = ikeys.concat([newIkey]);
        checkingQueue.push(newIkeys);
      }
    }
  }

  // If we end up down here, the target was NOT found
  return [];
};

const animalKingdom = {
  kingdom: {
    name: "Animalia",
    phyla: {
      Chordata: {
        classes: {
          Mammalia: {
            orders: {
              Primates: {
                families: {
                  Hominidae: {
                    genera: {
                      Homo: {
                        species: ["Homo sapiens"],
                      },
                    },
                  },
                  Cercopithecidae: {
                    genera: {
                      Macaca: {
                        species: ["Macaca mulatta", "Macaca fascicularis"],
                      },
                    },
                  },
                },
              },
              Carnivora: {
                families: {
                  Felidae: {
                    genera: {
                      Panthera: {
                        species: [
                          "Panthera leo",
                          "Panthera tigris",
                          "Panthera onca",
                        ],
                      },
                    },
                  },
                  Canidae: {
                    genera: {
                      Canis: {
                        species: [
                          "Canis lupus",
                          "Canis latrans",
                          "Canis lupus familiaris",
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
          Aves: {
            orders: {
              Passeriformes: {
                families: {
                  Corvidae: {
                    genera: {
                      Corvus: {
                        species: ["Corvus corax", "Corvus brachyrhynchos"],
                      },
                    },
                  },
                },
              },
              Accipitriformes: {
                families: {
                  Accipitridae: {
                    genera: {
                      Haliaeetus: {
                        species: [
                          "Haliaeetus leucocephalus",
                          "Haliaeetus albicilla",
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      Arthropoda: {
        classes: {
          Insecta: {
            orders: {
              Coleoptera: {
                families: {
                  Carabidae: {
                    genera: {
                      Carabus: {
                        species: ["Carabus auratus", "Carabus nemoralis"],
                      },
                    },
                  },
                },
              },
              Lepidoptera: {
                families: {
                  Nymphalidae: {
                    genera: {
                      Danaus: {
                        species: ["Danaus plexippus", "Danaus chrysippus"],
                      },
                    },
                  },
                },
              },
            },
          },
          Arachnida: {
            orders: {
              Araneae: {
                families: {
                  Araneidae: {
                    genera: {
                      Araneus: {
                        species: ["Araneus diadematus"],
                      },
                    },
                  },
                  Theridiidae: {
                    genera: {
                      Latrodectus: {
                        species: [
                          "Latrodectus mactans",
                          "Latrodectus hasselti",
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

console.log(
  "Macaca fascicularis can be found under:",
  breadthFirstSearch(animalKingdom, "Macaca fascicularis")
);

console.log(
  "Araneus diadematus can be found under:",
  breadthFirstSearch(animalKingdom, "Araneae")
);

console.log(
  "We won't find an answer for this query. Returned path is:",
  breadthFirstSearch(animalKingdom, "Donald Duck")
);
