function dot_product(vector1, vector2) {
    var result = 0;
    for (var i = 0; i < 3; i++) {
      result += vector1[i] * vector2[i];
    }
    return result;
  }