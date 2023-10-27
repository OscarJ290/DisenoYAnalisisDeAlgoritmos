function dominant(arr) {
    const dominants = [];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let isDominant = true;

        for (let j = i + 1; j < n; j++) {
        if (arr[i] <= arr[j]) {
            isDominant = false;
            break;
        }
    }
        if (isDominant) {
        dominants.push(arr[i]);
    }
    }

    return dominants;
    }

  console.log(dominant([1, 21, 4, 7, 5]));  // Output: [21, 7, 5]
  console.log(dominant([5, 4, 3, 2, 1]));   // Output: [5, 4, 3, 2, 1]
