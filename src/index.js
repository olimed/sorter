class Sorter{

  constructor() {
    // your implementation
    this.sorter = []
    this.count = 0
    this.cmpFunk = false
    this.funk = null
  }

  add(element) {
    // your implementation
    this.count++
    this.sorter.push(element)
  }

  at(index) {
    // your implementation
    return  ((index < 0) || (index >= this.sorter.length)) ? "Invalid index" : this.sorter[index]
  }

  get length() {
    // your implementation
    return this.count
  }

  toArray() {
    // your implementation
    return this.sorter.valueOf()
  }

  sort(indices) {
    // your implementation
    var i = 0
    var tempArr = []
    for (i = 0; i < indices.length; i++)
      {
        if (this.sorter[indices[i]] != null)
          tempArr[i] = this.sorter[indices[i]]
      }

    if (this.cmpFunk == true)
      {
        tempArr.sort(this.funk)
      }
    else
      {
        tempArr.sort(function(a, b) {
          return a - b
        })
        
      }  
       
    indices.sort(function(a, b) {
      return a - b
    })

    for (i = 0; i < indices.length; i++)
      {
        this.sorter[indices[i]] = tempArr[i]
      }    

    return  this.sorter

  }

  setComparator(compareFunction) {
    // your implementation
    if (compareFunction != null)
      {
        this.cmpFunk = true
        this.funk = compareFunction
      }


  }
}

module.exports = Sorter;