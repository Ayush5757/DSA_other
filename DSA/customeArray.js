class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length += 1;
  }
  get(index) {
    return this.data[index];
  }
  getIndexOf(name) {
    let index = 0;
    for (const key in this.data) {
      if (name.toUpperCase() === this.data[key].toUpperCase()) {
        return index;
      }
      index++;
    }
    return -1;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length -= 1;
  }
  //   delete(index) {
  //     let obj = {};
  //     let count = 0;
  //     if (index < this.length - 1) {
  //       for (let i = 0; i < this.length; i++) {
  //         obj[count] = this.data[i];
  //         if (i != index) {
  //           count++;
  //         }
  //       }
  //       this.data = { ...obj };
  //       this.length -= 1;
  //       return index;
  //     } else if (index === this.length - 1) {
  //       delete this.data[this.length - 1];
  //       this.length -= 1;
  //       return index;
  //     }
  //     return -1;
  //   }

//   better approch same for shift change it
  delete(index) {
    if (index < this.length - 1) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length-1]
      this.length--;
      return index;
    }
    return -1;
  }

  shift() {
    if (this.length > 0) {
      let count = {};
      for (let i = 0; i < this.length - 1; i++) {
        count[i] = this.data[i + 1];
      }
      this.data = { ...count };
      this.length--;
      return this.length;
    }
    return -1;
  }
}

const array = new MyArray();
array.push("asha");
array.push("Raja");
array.push("komal");
array.push("rahul");
console.log(array.getIndexOf("RAja"));
console.log(array.get(2));
console.log(array.delete(2));
console.log(array);
console.log(array.shift());
console.log(array);
