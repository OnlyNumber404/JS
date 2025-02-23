/**
 * catatan//
 * Array.push: menambahkan elemen di akhir dari sebuah array.
 * Array.pop: menghapus elemen terakhir dari sebuah array.
 * Array.shift: menghapus elemen pertama dari sebuah array.
 * Array.unshift: menambahkan elemen di awal dari sebuah array.
 * Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
 * Array.reverse: membalikkan urutan elemen dari sebuah array.
 * Array.sort: mengurutkan elemen dari sebuah array.
 * Object.assign: memodifikasi properti dari object.
 */

//example 1
function max(arrayOfNumbers) {
    return arrayOfNumbers
      .sort((a, b) => a - b)
      .pop();
  }
  
  const numbers = [10, 23, 24, 7, 42, 18];
  const largest = max(numbers);
  
  console.log(largest); // Output: 42
  console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]

//example 2
  const truthArray = [1,'','Hallo',0,null,'harry',14].filter((item) => Boolean(item));
  console.log(truthArray);

//example 3
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
const totalScore = students.reduce((acc,student) => acc + student.score, 0);

console.log(eligibleForScholarshipStudents);
console.log(totalScore); // Output: 313

/**
 * Output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */

//example 3
const user = {
  name: 'John',
  email: 'john@dicoding.com',
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
user.email = 'doe@dicoding.com';
console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }

//example 4
function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: 'Bob',
  email: 'bob@dicoding.com',
  preferences: {
    newsletter: true,
    notifications: 'weekly',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = 'Los Angeles';

console.log(complexUser.preferences.address.city); // Output: 'New York'