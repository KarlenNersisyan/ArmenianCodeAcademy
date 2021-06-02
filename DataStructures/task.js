const calcMemory = (folder) => {
  let memory = 0;

  for (const key in folder) {
    if (typeof folder[key] === "object" && folder[key]) {
      memory += calcMemory(folder[key]);
    } else {
      memory += folder[key];
    }
  }

  return memory;
};

const folder = {
  file1: 10,
  folder1: {
    file2: 20,
    folder2: {
      file3: 30,
      folder3: {
        file4: 50,
        folder4: null,
      },

      folder5: {
        fil5: 60,
        folder6: {
          file6: 80,
        },

        file7: 120,
      },
    },
  },

  file8: 40,
};

console.log(calcMemory(folder)); // 410

// 10 + 20 + 30 + 50 + 60 + 80 + 120 + 40 = 410
