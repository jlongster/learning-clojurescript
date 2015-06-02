// This is ugly, hacked-together-quickly code

function LinearStroke(color, brush) {
  this._vertices = new Float32Array(200);
  this._values = new Float32Array(200);
  this._numVertices = 0;
  this._color = color && goog.color.hexToRgb(color).map(function(x) { return x / 255; });
  this._rawColor = color;
  this._brush = brush;
}

LinearStroke.prototype.addVertex = function(x, y, value) {
  this._vertices = this._maybeResize(this._vertices,
                                     (this._numVertices * 2) + 2);
  this._values = this._maybeResize(this._values,
                                     this._numVertices + 1);

  var ptr = this._numVertices * 2;
  this._vertices[ptr] = x;
  this._vertices[ptr + 1] = y;

  ptr = this._numVertices;
  this._values[ptr] = value;

  this._numVertices++;
};

LinearStroke.prototype._maybeResize = function(vec, count) {
  if(vec.length < count) {
    var next = new Float32Array(vec.length +
                                (count < 1000 ? 1000 : count));
    next.set(vec);
    return next;
  }
  return vec;
};

LinearStroke.prototype.setCurrentPos = function(x1, y1, x2, y2) {
  this._currentPos = [x1, y1, x2, y2];
}

LinearStroke.prototype.getCurrentPos = function() {
  return this._currentPos;
};

LinearStroke.prototype.getValues = function() {
  return this._values;
}

// Generic mesh methods

LinearStroke.prototype.getNumVertices = function() {
  return this._numVertices;
}

LinearStroke.prototype.setNumVertices = function(num) {
  this._numVertices = num;
}

LinearStroke.prototype.getVertices = function() {
  return this._vertices;
};

LinearStroke.prototype.getColor = function() {
  return this._color;
};

LinearStroke.prototype.getBrush = function() {
  return this._brush;
};

LinearStroke.prototype.isColor = function(color) {
  return this._rawColor === color;
};

LinearStroke.prototype.serialize = function() {
  return ["linear", this._vertices, this._values, this._numVertices,
          this._color, this._rawColor, this._brush];
}

LinearStroke.unserialize = function(data) {
  var mesh = new LinearStroke();
  mesh._vertices = data[1];
  mesh._values = data[2];
  mesh._numVertices = data[3];
  mesh._color = data[4];
  mesh._rawColor = data[5];
  mesh._brush = data[6];
  return mesh;
}
