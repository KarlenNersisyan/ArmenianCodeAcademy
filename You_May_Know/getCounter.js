const getCounter = (name) => {
  let count = 0;

  const updateCounter = () => {
    console.log(name, count);
    count += 1;
  };

  return updateCounter;
};

const counter = getCounter("#1"); // 0
const counter1 = getCounter("#2"); // 0
const counter2 = getCounter("#3"); // 0

counter();
counter1();
counter();
counter();
counter();
counter();
counter();
counter1();
