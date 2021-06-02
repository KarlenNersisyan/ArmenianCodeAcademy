/*

        // // // ---1)  O(n)

            const numbers = [1, 2, 3];

            for (let i = 0; i < numbers.length; i += 1) {
            console.log(numbers[i]);
            }

        // // // ---2) 3 step ~ O(3) , for - O(n)

                for (let i = 0; i < numbers.length; i += 1) {
                    for (let j = 0; j < numbers.length; j += 1) {
                        console.log(`${i} - ${j}`);
                    }
                }

        // ---3) nested for ~ O(n^2) , O(1)

            const obj = {
            name: "Karl",
            age: 17,
            };

            const getValueByKey = (obj, key) => obj[key];
        // // // ---4)
            // O(1)

                console.log(numbers);

            // O(n^2)

            // (n / 2)


*/
